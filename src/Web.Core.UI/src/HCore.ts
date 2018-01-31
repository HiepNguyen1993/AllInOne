import { find } from 'lodash';
export class HCore {

    // MetsiMenu
    public static MetsiMenu() {
        $('#side-menu').metisMenu();
    }

    // Collapse ibox function
    public static Collapse_ibox() {
        $('.collapse-link').click(function () {
            const ibox = $(this).closest('div.ibox');
            const button = $(this).find('i');
            const content = ibox.find('div.ibox-content');
            content.slideToggle(200);
            button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
            ibox.toggleClass('').toggleClass('border-bottom');
            setTimeout(function () {
                ibox.resize();
                ibox.find('[id^=map-]').resize();
            }, 50);
        });
    }

    // Close ibox function
    public static Close_ibox() {
        $('.close-link').click(function () {
            const content = $(this).closest('div.ibox');
            content.remove();
        });
    }

    // Close menu in canvas mode
    public static Close_menu() {
        $('.close-canvas-menu').click(() => {
            $('body').toggleClass('mini-navbar');
            this.SmoothlyMenu();
        });
    }

    // Open close right sidebar
    public static Open_close_right_sidebar() {
        $('.right-sidebar-toggle').click(function () {
            $('#right-sidebar').toggleClass('sidebar-open');
        });
    }

    // Initialize slimscroll for right sidebar
    public static Init_slimscroll_right_sidebar() {
        $('.sidebar-container').slimScroll({
            height: '100%',
            railOpacity: 0.4,
            wheelStep: 10
        });
    }

    // Open close small chat
    public static Open_close_small_chat() {
        $('.open-small-chat').click(() => {
            $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
            $('.small-chat-box').toggleClass('active');
        });
    }

    // Initialize slimscroll for small chat
    public static Init_slimscroll_small_chat() {
        $('.small-chat-box .content').slimScroll({
            height: '234px',
            railOpacity: 0.4
        });
    }

    // Small todo handler
    public static Small_todo_handler() {
        $('.check-link').click(function () {
            const button = $(this).find('i');
            const label = $(this).next('span');
            button.toggleClass('fa-check-square').toggleClass('fa-square-o');
            label.toggleClass('todo-completed');
            return false;
        });
    }

    // Minimalize menu
    public static animaMinimalize_menutionHover() {
        $('.navbar-minimalize').click(() => {
            $('body').toggleClass('mini-navbar');
            this.SmoothlyMenu();
        });
    }

    // Tooltips demo
    public static Tooltips_demo() {
        $('.tooltip-demo').tooltip({
            selector: '[data-toggle=tooltip]',
            container: 'body'
        });
    }

    public static animationHover(element, animation) {
        element = $(element);
        element.hover(
            function () {
                element.addClass('animated ' + animation);
            },
            function () {
                // wait for animation to finish before removing classes
                window.setTimeout(function () {
                    element.removeClass('animated ' + animation);
                }, 2000);
            });
    }

    // Fixed Sidebar
    public static Fixed_Sidebar() {
        $(window).bind('load', function () {
            if ($('body').hasClass('fixed-sidebar')) {
                $('.sidebar-collapse').slimScroll({
                    height: '100%',
                    railOpacity: 0.9
                });
            }
        });
    }

    // show popup
    public static showPopup() {
        $('.modal').appendTo('body');
    }

    public static remmovePopup() {
        $('.modal').remove();
    }

    // Move right sidebar top after scroll
    public static Move_right_sidebar() {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
                $('#right-sidebar').addClass('sidebar-top');
            } else {
                $('#right-sidebar').removeClass('sidebar-top');
            }
        });
    }

    // Add slimscroll to element
    public static Add_slimscroll_to_element() {
        $('.full-height-scroll').slimscroll({
            height: '100%'
        });
    }

    private static SmoothlyMenu() {
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(500);
                }, 100);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(500);
                }, 300);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }

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

    // tslint:disable-next-line:member-ordering
    public static LoginAnimation () {
        /* ---- particles.js config ---- */
        particlesJS('login-animate', {
            'particles': {
              'number': {
                'value': 4,
                'density': {
                  'enable': true,
                  'value_area': 100
                }
              },
              'color': {
                'value': '#ffffff'
              },
              'shape': {
                'type': 'circle',
                'stroke': {
                  'width': 0,
                  'color': '#000000'
                },
                'polygon': {
                  'nb_sides': 5
                },
                'image': {
                  'src': 'img/github.svg',
                  'width': 40,
                  'height': 40
                }
              },
              'opacity': {
                'value': 0.5,
                'random': false,
                'anim': {
                  'enable': false,
                  'speed': 1,
                  'opacity_min': 0.1,
                  'sync': false
                }
              },
              'size': {
                'value': 1,
                'random': true,
                'anim': {
                  'enable': false,
                  'speed': 20,
                  'size_min': 0.1,
                  'sync': false
                }
              },
              'line_linked': {
                'enable': true,
                'distance': 150,
                'color': '#ffffff',
                'opacity': 0.4,
                'width': 2
              },
              'move': {
                'enable': true,
                'speed': 3,
                'direction': 'none',
                'random': false,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                  'enable': false,
                  'rotateX': 600,
                  'rotateY': 1200
                }
              }
            },
            'interactivity': {
              'detect_on': 'canvas',
              'events': {
                'onhover': {
                  'enable': true,
                  'mode': 'repulse'
                },
                'onclick': {
                  'enable': true,
                  'mode': 'push'
                },
                'resize': true
              },
              'modes': {
                'grab': {
                  'distance': 200,
                  'line_linked': {
                    'opacity': 1
                  }
                },
                'bubble': {
                  'distance': 200,
                  'size': 1,
                  'duration': 2,
                  'opacity': 0.8,
                  'speed': 3
                },
                'repulse': {
                  'distance': 100,
                  'duration': 0.4
                },
                'push': {
                  'particles_nb': 4
                },
                'remove': {
                  'particles_nb': 2
                }
              }
            },
            'retina_detect': true
          });
    }
};

window['__bravo'] = {
    clearCache: () => {
        Object.keys(localStorage).forEach(prop => delete localStorage[prop]);
    }
};