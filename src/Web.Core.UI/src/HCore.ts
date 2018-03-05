import { find } from 'lodash';
export class HCore {
    public static tryToFinished(maxLoop, conditionFn, callback, time) {
        const startWait = 0;
        const __waiting = setInterval(function () {
            if (conditionFn && conditionFn()) {
                callback();
                clearInterval(__waiting);
            }
            if (startWait > maxLoop) {
                clearInterval(__waiting);
            };
        }, time);
    }

    // Dragable panels
    public WinMove() {
        const element = '[class*=col]';
        const handle = '.ibox-title';
        const connect = '[class*=col]';
        $(element).sortable(
            {
                handle: handle,
                connectWith: connect,
                tolerance: 'pointer',
                forcePlaceholderSize: true,
                opacity: 0.8
            })
            .disableSelection();
    }

    // show popup
    public static showPopup() {
        $('.modal').appendTo('body');
    }

    public static remmovePopup() {
        $('.modal').remove();
    }
}
