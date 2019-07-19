import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'chat-input',
  styleUrl: 'chat-input.scss',
  shadow: false
})
export class ChatInput {
  textArea!: HTMLTextAreaElement
  inputOverlay!: HTMLSpanElement

  @Prop() value: string
  @Prop() newlineWhenShift: boolean = true
  @Prop() sendKeys: string[] = ['Enter']

  @Event() sendMessage: EventEmitter

  componentWillUpdate() {
    let textAreaStyle = getComputedStyle(this.textArea)
    this.inputOverlay.style.height = textAreaStyle.lineHeight
    this.textArea.style.height = textAreaStyle.minHeight
    let height = this.textArea.scrollHeight - parseFloat(textAreaStyle.paddingTop) - parseFloat(textAreaStyle.paddingBottom)
    this.textArea.style.height = `${height}px`
    this.inputOverlay.style.height = this.textArea.style.height
  }

  inputChanged(event) {
    this.value = event.target.value
  }

  scrollChanged(event) {
    this.inputOverlay.scrollTop = event.target.scrollTop
  }

  handleKeydown(event) {
    // if the key is enter and
    //   newlineWhenShift is (not) true and (or) the shiftKey is (not) pressed
    if(this.sendKeys.includes(event.key) && (!(this.newlineWhenShift && event.shiftKey === true))) {
      event.preventDefault()
      this.sendMessage.emit(event.target.value)
    }
  }

  render() {
    return(
      <div class="chat-input">
        <textarea
          class="chat-textarea"
          ref={(el) => this.textArea = el as HTMLTextAreaElement}
          onInput={(event: UIEvent) => this.inputChanged(event)}
          onScroll={(event: Event) => this.scrollChanged(event)}
          onKeyDown={(event: KeyboardEvent) => this.handleKeydown(event)}
          >
        </textarea>
        <div class="chat-input-overlay">
          <span ref={(el) => this.inputOverlay = el as HTMLSpanElement}>{this.value}</span>
        </div>
      </div>
    )
  }
}
