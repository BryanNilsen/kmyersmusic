export const NavLinks = () => {
  const contentContainer = document.getElementById("main-nav");
  contentContainer.innerHTML = `
  <div  class="center mx-auto pb-8">
    <ul class="text-xl uppercase sm:flex sm:text-xs justify-around">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./music.html">Music</a></li>
        <li><a href="./news.html">News</a></li>
        <li><a href="./tour.html">Tour</a></li>
        <li><a href="./subscribe.html">Subscribe</a></li>
    </ul>
  </div>
  `;
};
