'use strict';

System.register('devdanang/flarum-ext-bbcode-helper/components/BbCodeButton', ['flarum/Component', 'flarum/helpers/icon', 'flarum/components/LoadingIndicator'], function (_export, _context) {
    "use strict";

    var Component, icon, LoadingIndicator, BbCodeButton;
    return {
        setters: [function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon.default;
        }, function (_flarumComponentsLoadingIndicator) {
            LoadingIndicator = _flarumComponentsLoadingIndicator.default;
        }],
        execute: function () {
            BbCodeButton = function (_Component) {
                babelHelpers.inherits(BbCodeButton, _Component);

                function BbCodeButton() {
                    babelHelpers.classCallCheck(this, BbCodeButton);
                    return babelHelpers.possibleConstructorReturn(this, (BbCodeButton.__proto__ || Object.getPrototypeOf(BbCodeButton)).apply(this, arguments));
                }

                babelHelpers.createClass(BbCodeButton, [{
                    key: 'init',
                    value: function init() {
                        // the service type handling uploads
                        this.textAreaObj = null;

                        // initial state of the button
                        this.loading = false;

                        //current button
                        this.bbcode = '';

                        //handling the BbCodeButton
                        this.bbcodes = []; // empty array
                        // add elements with string keys
                        this.bbcodes['B'] = [];
                        this.bbcodes['B']['name'] = 'B';
                        this.bbcodes['B']['icon'] = 'bold';
                        this.bbcodes['B']['code'] = '[b][/b]';
                        this.bbcodes['B']['label'] = 'Bold';
                        //Italic
                        this.bbcodes['I'] = [];
                        this.bbcodes['I']['name'] = 'I';
                        this.bbcodes['I']['icon'] = 'italic';
                        this.bbcodes['I']['code'] = '[i][/i]';
                        this.bbcodes['I']['label'] = 'Italic';
                        //Underline
                        this.bbcodes['U'] = [];
                        this.bbcodes['U']['name'] = 'U';
                        this.bbcodes['U']['icon'] = 'underline';
                        this.bbcodes['U']['code'] = '[u][/u]';
                        this.bbcodes['U']['label'] = 'Underline';
                        //Strike Through
                        this.bbcodes['S'] = [];
                        this.bbcodes['S']['name'] = 'S';
                        this.bbcodes['S']['icon'] = 'strikethrough';
                        this.bbcodes['S']['code'] = '[s][/s]';
                        this.bbcodes['S']['label'] = 'Strike Through';
                        //link
                        this.bbcodes['URL'] = [];
                        this.bbcodes['URL']['name'] = 'URL';
                        this.bbcodes['URL']['icon'] = 'link';
                        this.bbcodes['URL']['code'] = '[url=""][/url]';
                        this.bbcodes['URL']['label'] = 'Link';
                        //Image
                        this.bbcodes['IMG'] = [];
                        this.bbcodes['IMG']['name'] = 'IMG';
                        this.bbcodes['IMG']['icon'] = 'file-image-o';
                        this.bbcodes['IMG']['code'] = '[img][/img]';
                        this.bbcodes['IMG']['label'] = 'Image';
                        //Email
                        this.bbcodes['EMAIL'] = [];
                        this.bbcodes['EMAIL']['name'] = 'EMAIL';
                        this.bbcodes['EMAIL']['icon'] = 'envelope';
                        this.bbcodes['EMAIL']['code'] = '[email][/email]';
                        this.bbcodes['EMAIL']['label'] = 'Email';
                        //CODE
                        this.bbcodes['CODE'] = [];
                        this.bbcodes['CODE']['name'] = 'CODE';
                        this.bbcodes['CODE']['icon'] = 'code';
                        this.bbcodes['CODE']['code'] = '[code][/code]';
                        this.bbcodes['CODE']['label'] = 'Code';
                        //QUOTE
                        this.bbcodes['QUOTE'] = [];
                        this.bbcodes['QUOTE']['name'] = 'QUOTE';
                        this.bbcodes['QUOTE']['icon'] = 'quote-left';
                        this.bbcodes['QUOTE']['code'] = '[quote][/quote]';
                        this.bbcodes['QUOTE']['label'] = 'Quote';
                        //LIST
                        this.bbcodes['LIST'] = [];
                        this.bbcodes['LIST']['name'] = 'LIST';
                        this.bbcodes['LIST']['icon'] = 'list';
                        this.bbcodes['LIST']['code'] = '[list][/list]';
                        this.bbcodes['LIST']['label'] = 'List';
                        //DEL
                        this.bbcodes['DEL'] = [];
                        this.bbcodes['DEL']['name'] = 'DEL';
                        this.bbcodes['DEL']['icon'] = 'strikethrough';
                        this.bbcodes['DEL']['code'] = '[del][/del]';
                        this.bbcodes['DEL']['label'] = 'Del';
                        //COLOR
                        this.bbcodes['COLOR'] = [];
                        this.bbcodes['COLOR']['name'] = 'COLOR';
                        this.bbcodes['COLOR']['icon'] = 'pencil-square-o';
                        this.bbcodes['COLOR']['code'] = '[color][/color]';
                        this.bbcodes['COLOR']['label'] = 'Color';
                        //CENTER
                        this.bbcodes['CENTER'] = [];
                        this.bbcodes['CENTER']['name'] = 'CENTER';
                        this.bbcodes['CENTER']['icon'] = 'align-center';
                        this.bbcodes['CENTER']['code'] = '[center][/center]';
                        this.bbcodes['CENTER']['label'] = 'Center';
                        //SIZE
                        this.bbcodes['SIZE'] = [];
                        this.bbcodes['SIZE']['name'] = 'SIZE';
                        this.bbcodes['SIZE']['icon'] = 'arrows-h';
                        this.bbcodes['SIZE']['code'] = '[size][/size]';
                        this.bbcodes['SIZE']['label'] = 'Size';
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        return m('div', { className: 'BBCodeButton Button hasIcon flagrow-image-upload-button Button--icon' }, [this.loading ? LoadingIndicator.component({ className: 'Button-icon' }) : icon(this.bbcodes[this.bbcode]['icon'], { className: 'Button-icon', onclick: this.process.bind(this) }), m('span', { className: 'Button-label' }, this.bbcodes[this.bbcode]['label'])]);
                    }
                }, {
                    key: 'process',
                    value: function process(e) {
                        this.loading = true;
                        console.log('trigger button');
                        var string = this.bbcodes[this.bbcode]['code'];
                        this.textAreaObj.insertAtCursor(string);
                    }
                }, {
                    key: 'failure',
                    value: function failure(message) {}
                    // todo show popup


                    /**
                     * Appends the image's link to the body of the composer.
                     *
                     * @param image
                     */

                }, {
                    key: 'success',
                    value: function success(image) {

                        this.loading = true;
                        console.log('trigger button');
                        var string = this.bbcodes[this.bbcode]['code'];
                        this.textAreaObj.insertAtCursor(string);
                    }
                }]);
                return BbCodeButton;
            }(Component);

            _export('default', BbCodeButton);
        }
    };
});;
'use strict';

System.register('devdanang/flarum-ext-bbcode-helper/main', ['flarum/extend', 'flarum/components/TextEditor', 'devdanang/flarum-ext-bbcode-helper/components/BbCodeButton'], function (_export, _context) {
    "use strict";

    var extend, TextEditor, BbCodeButton;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsTextEditor) {
            TextEditor = _flarumComponentsTextEditor.default;
        }, function (_devdanangFlarumExtBbcodeHelperComponentsBbCodeButton) {
            BbCodeButton = _devdanangFlarumExtBbcodeHelperComponentsBbCodeButton.default;
        }],
        execute: function () {

            app.initializers.add('bbcode-helper-button', function (app) {
                var bbcode = ['B', 'I', 'U', 'S', 'URL', 'IMG', 'EMAIL', 'CODE', 'QUOTE', 'LIST', 'DEL', 'COLOR', 'CENTER', 'SIZE']; // empty array
                /**
                 * Add the upload button to the post composer.
                 */
                extend(TextEditor.prototype, 'controlItems', function (items) {
                    // create and add the button
                    for (var i in bbcode) {
                        var bbCodeButton = new BbCodeButton();
                        bbCodeButton.textAreaObj = this;
                        bbCodeButton.bbcode = bbcode[i];
                        items.add('bbcode-button-' + i, bbCodeButton, 0);
                    }
                });
            });
        }
    };
});