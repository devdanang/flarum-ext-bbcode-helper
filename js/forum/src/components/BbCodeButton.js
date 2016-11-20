import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

export default class BbCodeButton extends Component {

    /**
     * Load the configured remote uploader service.
     */
    init() {
        // the service type handling uploads
        this.textAreaObj = null;

        // initial state of the button
        this.loading = false;

        //current button
        this.bbcode = '';

        //Define the bbcodes with icons
        this.bbcodes = [];
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

    /**
     * Show the actual Upload Button.
     *
     * @returns {*}
     */
    view() {
        return m('div', { className: 'BBCodeButton Button hasIcon flagrow-image-upload-button Button--icon' }, [
          this.loading ? LoadingIndicator.component({ className: 'Button-icon' }) : icon(this.bbcodes[this.bbcode]['icon'], { className: 'Button-icon', onclick: this.process.bind(this)}),
          m('span', { className: 'Button-label' }, this.bbcodes[this.bbcode]['label'])]);
    }

    /**
     * Process the upload event.
     *
     * @param e
     */
    process(e) {
        this.loading = true;
        var string = this.bbcodes[this.bbcode]['code'];
        this.textAreaObj.insertAtCursor(string);
    }

    /**
     * Handles errors.
     *
     * @param message
     */
    failure(message) {
        // todo show popup
    }
}
