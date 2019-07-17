import { newE2EPage } from '@stencil/core/testing';

describe('chat-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<chat-message></chat-message>');
    const element = await page.find('chat-messaged');
    expect(element).not.toBe(undefined);
  });

  it('renders changes to the message data', async () => {
    const page = await newE2EPage();

    await page.setContent('<chat-message></chat-message>');
    const component = await page.find('chat-message');

    const username = await page.find('chat-message .username');
    expect(username.textContent).toEqual(``);
    component.setProperty('username', 'brecert')
    await page.waitForChanges();
    expect(username.textContent).toEqual('brecert')

    const timestamp = await page.find('chat-message .timestamp');
    expect(timestamp.textContent).toEqual(``);
    component.setProperty('timestamp', Date.UTC(2019, 6, 16, 16, 16, 16, 16));
    await page.waitForChanges();
    expect(timestamp.textContent).toEqual(`1563293776016`);

    const message = await page.find('chat-message .message');
    expect(message.textContent).toEqual(``);
    component.setProperty('message', 'hello world!');
    await page.waitForChanges();
    expect(message.textContent).toEqual(`hello world!`);

    component.setProperty('avatar', 'https://via.placeholder.com/250');
    const avatarImageEmpty = await page.find('chat-message .avatar img');
    expect(avatarImageEmpty).toBeNull
    await page.waitForChanges();
    const avatarImage = await page.find('chat-message .avatar img');
    expect(avatarImage.getAttribute('src')).toEqual('https://via.placeholder.com/250')
  });
});
