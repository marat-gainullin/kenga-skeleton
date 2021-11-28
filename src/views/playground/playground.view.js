import Button from 'kenga-buttons/button';
import AnchorsPane from 'kenga-containers/anchors-pane';
import Label from 'kenga-labels/label';
// So, that is it for the begining :)
// Responsive design with Winnie is a little bit another topic. But it is possible as well.
class KengaView {
    constructor () {
        const surface = new AnchorsPane();
        this.surface = surface;
        const label = new Label();
        this.label = label;
        const button = new Button();
        this.button = button;
        const button1 = new Button();
        this.button1 = button1;
        const label1 = new Label();
        this.label1 = label1;
        surface.add(label);
        surface.add(button);
        surface.add(button1);
        surface.add(label1);
        {
            surface.element.style.width = '100%';
            surface.element.style.height = '100%';
        }
        {
            label.text = 'Hello the new a beautyful world!';
            label.element.style.right = '32px';
            label.element.style.top = '20px';
        }
        {
            button.text = 'Close';
            button.element.style.right = '32px';
            button.element.style.bottom = '32px';
        }
        {
            button1.text = 'Click me!';
            button1.element.style.right = '100px';
            button1.element.style.bottom = '32px';
        }
        {
            label1.text = 'With full power it will be great!';
            label1.element.style.left = '17px';
            label1.element.style.top = '20px';
        }
    }
}

export default KengaView;
