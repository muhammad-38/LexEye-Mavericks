import React, { useState } from "react";
import Logo from "../assets/Actual-Logo.png";
import { Link } from "react-router-dom"; // <-- should be react-router-dom
import { IoMdCloseCircle } from "react-icons/io";

const Laws = () => {
  const [readMoreBtn, setReadMoreBtn] = useState(false);

  return (
    <>
      <div id="traffic">
        <div id="read-more" style={{ display: readMoreBtn ? "block" : "none" }}>
          <div id="close-line"></div>
          <button onClick={() => setReadMoreBtn(false)}>
            <IoMdCloseCircle color="var(--primary-color)" />
          </button>
          <div id="read-content">
            <h1>HEADING</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum excepturi perferendis nam. Maiores minus tempora laboriosam cumque iusto? Placeat, dolorem. Sed impedit nemo sequi numquam? Quo praesentium laboriosam consequuntur ad, sequi harum dolor eum rerum id vero, facere ullam rem expedita ipsum pariatur nostrum esse veritatis inventore unde. Quisquam impedit incidunt quod amet eaque veritatis ipsum delectus? Sequi repellendus, eius aut ut deserunt ex esse temporibus consectetur voluptatibus rem necessitatibus a ab vitae consequatur nesciunt eos incidunt laborum harum tempore recusandae? Voluptatem voluptate, itaque earum quos neque sequi vitae autem, perspiciatis voluptas, suscipit ea optio alias dignissimos corporis tempora delectus natus quaerat! Natus aliquid, reiciendis nostrum dolore doloremque consectetur distinctio voluptas consequuntur? Excepturi ipsum aspernatur laudantium laborum optio quod ex nostrum incidunt hic cum placeat consequuntur nobis, temporibus sequi enim nisi facilis, veniam assumenda odit omnis nam asperiores nemo. Ad consequuntur, architecto saepe cupiditate veniam veritatis consequatur quis voluptatibus fugit incidunt vitae, ea obcaecati ut! Et sit officiis accusantium cupiditate doloribus commodi eligendi vero quod fuga ad blanditiis harum, a placeat! Impedit atque non in mollitia, commodi sunt repellendus at debitis placeat numquam natus odio ipsa deleniti possimus animi sapiente doloremque, ut ad quo rem quaerat fugiat eos et quibusdam! Voluptas rerum in, illo voluptates at nihil odio, nemo magni, voluptate labore similique iure explicabo obcaecati qui quis culpa eum! Pariatur expedita nihil, aliquam vel consequatur natus consequuntur iusto, culpa voluptatum veniam architecto, accusamus enim? Accusamus inventore quos temporibus illum beatae accusantium dolorem? Sapiente quod dolore ea dolorum eos? Labore asperiores ipsam nulla quasi veniam, eveniet omnis error, sunt voluptates distinctio molestiae nemo? Officia, accusantium corrupti? Nisi dolore quos amet est. Modi assumenda voluptatibus eum ut et a aspernatur molestias consequatur deleniti, velit voluptas fugit nisi nobis architecto autem. Quod repellendus molestias dolores incidunt reprehenderit, commodi deserunt labore eveniet?
            </p>
          </div>
        </div>
        <div id="traffic-heading">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <h1>Traffic</h1>
          <Link id="goback-btn" to="/categories">
            Categories
          </Link>
        </div>

        <div>
          <input type="text" placeholder="Search for laws..." id="search-bar" />
        </div>

        <div id="traffic-content">
          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={() => setReadMoreBtn(true)}>Read More</button>
          </div>

          {/* duplicate boxes */}
          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={() => setReadMoreBtn(true)}>Read More</button>
          </div>
          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={() => setReadMoreBtn(true)}>Read More</button>
          </div>
          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={() => setReadMoreBtn(true)}>Read More</button>
          </div>
          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={() => setReadMoreBtn(true)}>Read More</button>
          </div>
          <div className="content-box">
            <span>
              <h1>Hello</h1>
              <i className="fa-solid fa-circle-down"></i>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={() => setReadMoreBtn(true)}>Read More</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Laws;
