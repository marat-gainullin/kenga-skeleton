import PlaygroundView from './playground.view';
// This is the module, which uses the view we have just produced
export default class Playground {
    private view = new PlaygroundView();

    show() {
        // In more complex cases it could be an addition to a widget of another view.
        // There is no a need to manipulate DOM elements directly every time
        document.body.appendChild(this.view.surface.element);
    }

    hide(): boolean {
        const parent: HTMLElement = this.view.surface.element.parentElement
        if (parent) {
            parent.removeChild(this.view.surface.element)
            return true
        } else {
            return false
        }
    }
}
