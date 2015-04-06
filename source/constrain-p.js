(function ($, win) {
    'use strict';


    $.fn.constrainP = function (opt) {
        opt = opt || {};

        var items = [],
            maxPercent = 1;

        function getOptionsCopy(opt) {
            var obj = {},
                i;

            opt = opt || {};

            for (i in opt) {
                if (opt.hasOwnProperty(i)) {
                    obj[i] = opt[i];
                }
            }
            return obj;
        }

        function isAdded(scope) {
            if (scope.attr('class').indexOf('constrain-p') > -1) {
                return true;
            }
            return false;
        }

        function setSizeByScale(scope, options, scale) {
            options = getOptionsCopy(options);
            options.width = scale * options.originalWidth / maxPercent;
            options.height = scale * options.originalHeight / maxPercent;
            options.scale = scale;

            scope.css({
                width: options.width,
                height: options.height
            });
            //console.log(options.onResized);
            if (options.onResized) {
                options.onResized(scope, options);
            }
        }

        function refresh(scope, options) {
            var scaleWidth,
                scaleHeight,
                parent,
                parentSize;

            if (scope.length > 0) {
                parent = scope.parent();
                parentSize = {
                    width: parent.innerWidth(),
                    height: parent.innerHeight()
                };

                // scaleWidth
                scaleWidth = parentSize.width * maxPercent / options.originalWidth;
                scaleHeight = parentSize.height * maxPercent / options.originalHeight;

                if (options.guide === 'width') {
                    setSizeByScale(scope, options, scaleWidth);
                } else if (options.guide === 'height') {
                    setSizeByScale(scope, options, scaleHeight);
                } else {
                    if (scaleWidth < scaleHeight) {
                        setSizeByScale(scope, options, scaleWidth);
                    } else {
                        setSizeByScale(scope, options, scaleHeight);
                    }
                }
            }
        }

        function build(scope, options) {

            function validateOptions() {
                options.originalSize = options.originalSize || scope.attr('data-original-size');
                options.guide = options.guide || scope.attr('data-guide');

                options.guide = options.guide === 'width' || options.guide === 'height' || options.guide === 'all' ? options.guide : 'width';

                if (!options.originalSize) {
                    throw new Error('To preset the attribute of data-original-size (w|h) on tag, or the parameter of originalSize (w|h) when to call the plugin.');
                }

                options.originalSize = options.originalSize.toLowerCase().split('x');
                options.originalWidth = Number(options.originalSize[0]);
                options.originalHeight = Number(options.originalSize[1]);
            }

            validateOptions();
            if (isAdded(scope) === false) {
                scope.css({
                    display: 'block',
                    'box-sizing': 'border-box'
                });
                scope.addClass('constrain-p-' + items.length);
                items.push({
                    scope: scope,
                    options: options
                });
            }
            refresh(scope, options);
        }

        $.each($(this), function (i, val) {
            var el = $(val);
            build(el, getOptionsCopy(opt));
            return i;
        });

        win.onresize = function () {
            var i,
                total = items.length,
                obj;

            for (i = 0; i < total; i = i + 1) {
                obj = items[i];
                refresh(obj.scope, obj.options);
            }
        };
    };

}(jQuery, window));