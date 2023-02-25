import { createClient } from './gist';

describe('Client', () => {
  const accessToken = process.env.GITHUB_ACCESS_TOKEN;
  expect(accessToken).toBeDefined();
  
  const client = createClient(accessToken!);

  it('should fetch all gists', async () => {
    const gists = await client.fetchAll()
    expect(gists).toBeDefined();
  });
})
