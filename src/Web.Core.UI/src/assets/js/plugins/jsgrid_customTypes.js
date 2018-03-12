$(function () {

    var dateField = function (config) {
        jsGrid.Field.call(this, config);
    };

    dateField.prototype = new jsGrid.Field({
        sorter: function (date1, date2) {
            return new Date(date1) - new Date(date2);
        },

        itemTemplate: function (value) {
            return new Date(value).toDateString();
        },

        insertTemplate: function (value) {
            return this._insertPicker = $('<input>').datepicker({ defaultDate: new Date() });
        },

        editTemplate: function (value) {
            return this._editPicker = $('<input>').datepicker().datepicker('setDate', new Date(value));
        },

        insertValue: function () {
            return this._insertPicker.datepicker('getDate').toISOString();
        },

        editValue: function () {
            return this._editPicker.datepicker('getDate').toISOString();
        }
    });

    jsGrid.fields.date = dateField;

    /* Start: Norwegian numeric text box  */
    var norwegianNumericField = function (config) {
        jsGrid.Field.call(this, config);
    };

    norwegianNumericField.prototype = new jsGrid.Field({
        defaultValue: undefined,

        validate: function (value, item) {
            //  n = value.replace(/\./g, '').replace(',', '.');
            // return !isNaN(parseFloat(n)) && isFinite(n);
            return !isNaN(parseFloat(value)) && isFinite(value);
        },
        itemTemplate: function (value) {
            if (value) {
                n = $.type(value) === "string" ? value.replace(',', '.') : value;
                var intlValue = Intl.NumberFormat('it-IT', { minimumFractionDigits: 1 }).format(n);
                return intlValue.split('.').join(' ');
            }
            return '0,0';
        },

        insertTemplate: function (value) {
            if (value === undefined && this.defaultValue) {
                value = this.defaultValue;
            }
            this._amount = value ? valueToNorwayNumber(value) : value;
            this._amountInput = $('<input>').val(this._amount);
            return this._amountInput;
        },

        editTemplate: function (value) {
            this._amount = value ? valueToNorwayNumber(value) : value;
            this._amountInput = $('<input>').val(this._amount);
            return this._amountInput;
        },

        insertValue: function () {
            this._amount = this._amountInput.val();
            return this._amount ? norwayNumberToValue(this._amount) : this._amount;
        },

        editValue: function () {
            this._amount = this._amountInput.val();
            return this._amount ? norwayNumberToValue(this._amount) : this._amount;
        }
    });
    norwegianNumericField.prototype.setValue = function (value) {
        this._amount = value;
        this._amountInput.val(this._amount);
    }

    function valueToNorwayNumber(value) {
        return $.type(value) === "string" ? value.replace('.', ',') : value;
    }

    function norwayNumberToValue(value) {
        return $.type(value) === "string" ? value.replace(',', '.') : value;
    }

    jsGrid.fields.norwayNumber = norwegianNumericField;
    /* End: Norwegian numeric text box  */

    var timeField = function (config) {
        jsGrid.Field.call(this, config);
    };

    timeField.prototype = new jsGrid.Field({
        defaultHour: '07',      // custom property
        onTimeChanged: null,
        currentTime: {
            hh: '07',
            MM: '00'
        },

        validate: function (value, item) {
            return value != '00:00' && compareDateTime(item.To, item.From) !== -1;
        },
        sorter: function (date1, date2) {
            return new Date(date1) - new Date(date2);
        },

        itemTemplate: function (value) {
            return $.type(value) === "string" && value.length === 8 ? hoursToString(stringToHours(value)) : value;
        },

        insertTemplate: function (value) {
            return this._insertPicker = uiHours(this, value);
        },

        editTemplate: function (value) {
            return this._editPicker = uiHours(this, value);
        },

        insertValue: function () {
            var value = uiToValue(this._insertPicker);
            return hoursToString(value);
        },

        editValue: function () {
            var value = uiToValue(this._editPicker);
            return hoursToString(value);
        }
    });

    //Timepicker

    var timeDefault = {
        hours: [],
        minutes: [],
        hoursSelect: '',
        minutesSelect: ''
    };

    var isOneLetter, value;

    for (var i = 0; i < 24; i++) {
        isOneLetter = ('' + i).length;
        value = isOneLetter === 1 ? '0' + i : i;

        timeDefault.hours.push(
            $('<option>')
                .attr('value', value)
                .text(value)
        );

        timeDefault.hoursSelect = $('<select>').html(timeDefault.hours);
    }

    var inputMins = ['00', '30'];
    inputMins.forEach(function (value) {
        timeDefault.minutes.push(
            $('<option>')
                .attr('value', value)
                .text(value)
        );
    }, this);
    timeDefault.minutesSelect = $('<select>').html(timeDefault.minutes);

    jsGrid.fields.time = timeField;

    function stringToHours(str) {
        var times = str.split(':');
        return {
            hh: times[0],
            MM: times[1]
        };
    }

    function hoursToString(hourObj) {
        return hourObj.hh + ':' + hourObj.MM;
    }

    function uiHours(timeField, value) {
        if (!value)
            value = {
                hh: timeField.defaultHour,
                MM: '00'
            };
        else {
            value = stringToHours(value);
        }
        timeField.currentTime = value;
        this.onTimeChanged = timeField.onTimeChanged;
        var hourSelect = timeDefault.hoursSelect.clone();
        hourSelect.onTimeChanged = this.onTimeChanged;
        hourSelect.currentTime = timeField.currentTime;

        hourSelect.on("change", function (e) {
            hourSelect.currentTime.hh = e.target.value;
            hourSelect.onTimeChanged();
        });

        var minSelect = timeDefault.minutesSelect.clone();
        minSelect.on("change", function (e) {
            hourSelect.currentTime.MM = e.target.value;
            hourSelect.onTimeChanged();
        });

        return $('<div>')
            .append(hourSelect.width(55).val(value.hh))
            .append(minSelect.width(55).val(value.MM));
    }

    function uiToValue($uiHours) {
        return {
            hh: $uiHours.find('select:first').val(),
            MM: $uiHours.find('select:nth-child(2)').val()
        }
    }

    function compareDateTime(dateTimeA, dateTimeB) {
        var momentA = moment(dateTimeA, 'HH:mm');
        var momentB = moment(dateTimeB, 'HH:mm');
        if (momentA > momentB) return 1;
        else if (momentA < momentB) return -1;
        else return 0;
    }

});
