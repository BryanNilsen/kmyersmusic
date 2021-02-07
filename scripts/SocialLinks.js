const socialObjects = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/0tIqtajuYtIK8v0paehP09",
    icon: "fa-spotify",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC9vHnyTeBOXGvgWlit-ns_A",
    icon: "fa-youtube",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@kaitlynmyers.music",
    icon: "fa-tiktok",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/KaitlynCarolinaMyers/",
    icon: "fa-facebook-square",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kaitlyn.myers.music",
    icon: "fa-instagram",
  },
];

export const SocialLinks = () => {
  const contentContainer = document.getElementById("social__icons");

  const socialListItems = socialObjects
    .map((social) => {
      return `
        <li>
          <a href="${social.url}" rel=”noopener” target="_blank">
            <span class="label">${social.name}</span>
            <i class="fab ${social.icon}"></i>
          </a>
        </li>
  `;
    })
    .join("");

  contentContainer.innerHTML = `
  <div class="social__icons text-2xl sm:text-3xl md:text-4xl my-8 mx-auto">
    <ul>${socialListItems}</ul>
  </div>`;
};
