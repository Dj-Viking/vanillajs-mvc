export default {
  async getDogs() {
    const response = await fetch('https://barkwireapi.brooks.now.sh/dogs', { method: 'GET' });
    return response.json();
  },
  async getDog(id) {
    const response = await fetch(`https://barkwireapi.brooks.now.sh/dogs/${id}`, { method: 'GET' });
    return response.json();
  }
}