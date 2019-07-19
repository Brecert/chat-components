import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-avatar',
  styleUrl: 'chat-avatar.scss',
  shadow: true
})
export class ChatAvatar {
  /**
   * The path to the avatar image
   */
  @Prop({ reflect: true }) src: string;

  render() {
    return(
      <div class="avatar">
        <img src={this.src}/>
      </div>
    )
  }
}
