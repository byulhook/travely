import { css } from '@emotion/react';

const tags = [
  { name: 'Food', imgSrc: '/src/assets/tag-food.webp' },
  { name: 'Culture', imgSrc: '/src/assets/tag-culture.webp' },
  { name: 'Healing', imgSrc: '/src/assets/tag-healing.webp' },
  { name: 'Nature', imgSrc: '/src/assets/tag-nature.webp' },
  { name: 'Sports', imgSrc: '/src/assets/tag-sports.webp' },
  { name: 'Festival', imgSrc: '/src/assets/tag-festival.webp' },
  { name: 'K-POP', imgSrc: '/src/assets/tag-kpop.webp' },
  { name: 'K-DRAMA', imgSrc: '/src/assets/tag-kdrama.webp' },
  { name: 'JEJU', imgSrc: '/src/assets/tag-jeju.webp' },
  { name: 'etc.', imgSrc: '/src/assets/tag-etc.webp' },
];

function TagCardWrap() {
  return (
    <ul css={tagCardWrap}>
      {tags.map((tag) => (
        <li>
          <div className="tag-img">
            <img src={tag.imgSrc} alt={tag.name} />
          </div>
          <p className="tag-name">{tag.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default TagCardWrap;

const tagCardWrap = css`
  margin: 30px 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    position: relative;
    width: 90px;
    height: 90px;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
    .tag-img {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .tag-name {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      font-weight: bold;
      color: #fff;
    }
    .tag-name:hover {
      /* border: 3px solid #4a95f2; */
    }
  }
  li:hover {
    transform: translateY(-3px);
    &:before {
      display: none;
    }
  }

  li:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
