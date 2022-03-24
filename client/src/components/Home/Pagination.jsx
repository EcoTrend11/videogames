import style from "./Pagination.module.css"
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className={style.container}>
        <nav className={style.containerUl}>
          <ul className={style.containerLi}>
            {pageNumbers.map(number => (
              <li className={style.li} key={number} >
                <button  className={style.button} onClick={()=> { paginate(number)
                }}  >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };

export default Pagination