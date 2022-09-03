import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";

const Imagepage = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.facthunt.in/fostergem/v1/post/list/public",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setDocuments(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
    <div style={{ height:"40px"  }}></div>
      <div className="row " style={{ backgroundColor: "rgb(46,48,53"  }}>
        <div className="col-lg-2 my-5">
          <div className="col-lg-12">
            <AiOutlineHeart style={{ fontSize: "40px", color: "white" }} />
          </div>
          <div className="col-lg-12 my-5">
            <FiShare2 style={{ fontSize: "40px", color: "white" }} />
          </div>
        </div>
        <div className="col-lg-6 my-5">
          <p>
            {documents.content?.map((result) => {
              return (
                <>
                  {/* <p>{result.postId}</p> */}
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      backgroundColor: "rgb(46,48,53",
                      color: "white",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={result.coverImageUrl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{result.title}</h5>
                      <p className="card-text">{result.summary}</p>
                      {/* <a href="#" className="">
                      {result.date}
                      </a> */}
                      <p>Date : {result.date.slice(0, 10)}</p>
                    </div>
                  </div>
                  <br />
                </>
              );
            })}
          </p>
        </div>
        <div
          className="col-lg-4 my-5"
          style={{ fontSize: "40px", color: "white" }}
        >
          News Most Viral
        </div>
      </div>
    </>
  );
};

export default Imagepage;
