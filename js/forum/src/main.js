import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';

import BbCodeButton from 'devdanang/flarum-ext-bbcode-helper/components/BbCodeButton';

app.initializers.add('bbcode-helper-button', app => {
    //Define to available bbcode
    var bbcode = ['B', 'I', 'U', 'S', 'URL', 'IMG', 'EMAIL', 'CODE', 'QUOTE', 'LIST', 'DEL', 'COLOR', 'CENTER', 'SIZE'];
    /**
     * Add the upload button to the post composer.
     */
    extend(TextEditor.prototype, 'controlItems', function(items)
    {
        // create and add the button
        for (var i in bbcode) {
            var bbCodeButton = new BbCodeButton();
            bbCodeButton.textAreaObj = this;
            bbCodeButton.bbcode = bbcode[i];
            items.add('bbcode-button-'+i, bbCodeButton, 0);
        }
    });
});
