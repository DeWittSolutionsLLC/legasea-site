import styles from "./SocialFeed.module.css";

// Placeholder feed — swap for a real Instagram Graph API / embed widget
// (e.g. SnapWidget, Elfsight) once a live business account is connected.
const POSTS = [
  {
    image: "/images/CapybaraPhoto-web.webp",
    caption: "Nose to nose with our chillest resident. 🐹",
    likes: 342,
  },
  {
    image: "/images/BirthdayPartyPhoto.webp",
    caption: "Starfish, balloons, and a very happy birthday guest. 🎈",
    likes: 218,
  },
  {
    image: "/images/JuniorZookeeperPhoto.webp",
    caption: "Junior Zookeepers made a new (scaly) friend today.",
    likes: 501,
  },
  {
    image: "/images/ZooToYouPhoto.webp",
    caption: "Bring-the-Zoo-to-You made a stop across town this week!",
    likes: 176,
  },
  {
    image: "/images/MiningPhoto-web.webp",
    caption: "Gem mining haul of the day 💎",
    likes: 129,
  },
  {
    image: "/images/AnnexPrivateToursPhoto.webp",
    caption: "Say hello to our resident rhino iguana.",
    likes: 264,
  },
];
export default function SocialFeed() {
  return (
    <div className={styles.grid}>
      {POSTS.map((post, i) => (
        <a
          key={i}
          href="http://instagram.com/legaseaaquarium"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.post}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" loading="lazy" />
          <span className={styles.handle}>@legaseaaquarium</span>
          <span className={styles.overlay}>
            <p className={styles.caption}>{post.caption}</p>
            <span className={styles.meta}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icons/icon-heart.jpg"
                alt=""
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginRight: 4,
                }}
              />
              {post.likes}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
