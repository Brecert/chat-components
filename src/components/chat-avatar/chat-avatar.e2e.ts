import { newE2EPage } from '@stencil/core/testing';

describe('chat-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<chat-avatar></chat-avatar>');
    const element = await page.find('chat-avatar');
    expect(element).not.toBe(undefined);
  });

  it('renders changes to the avatar data', async () => {
    const page = await newE2EPage();

    await page.setContent('<chat-avatar></chat-avatar>');
    const component = await page.find('chat-avatar');

    component.setProperty('src', 'https://via.placeholder.com/250');
    const img = await page.find('chat-avatar >>> .avatar img');
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual('https://via.placeholder.com/250')
    expect(component).toHaveAttribute('src')
  });
});
