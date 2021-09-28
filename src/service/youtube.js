class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequsetOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequsetOptions
    );
    const result = await response.json();
    return result.items;
  }
  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequsetOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
export default Youtube;

// Q. 비동기 데이터 수신방법, then() 하고 state 갱신?
// Q. 데이터는 무조건 App에서 받아야겠지?
// Q. prop drilling 대체방안은?
