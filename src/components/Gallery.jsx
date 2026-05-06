import styles from './Gallery.module.css';

const Gallery = () => {
  const photos = [
    { src: 'https://content.r9cdn.net/rimg/dimg/27/bb/1e63bfbb-city-15139-1645cdf896a.jpg?width=1366&height=768&xhint=2663&yhint=911&crop=true'},
    { src: 'https://cdn.britannica.com/18/194818-050-E7A7A993/view-Kiev-Ukraine.jpg'},
    { src: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk5MTU2Mjk1MDk3MDAxNzQ1/interesting-and-fun-facts-about-kyiv.jpg'}
  ];

  return (
    <div className={styles.gallery}>
      <h2>Photo Gallery</h2>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <img src={photo.src}/>
        ))}
      </div>
    </div>
  );
};

export default Gallery;