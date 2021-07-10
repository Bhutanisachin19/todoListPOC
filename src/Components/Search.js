import React, { useState } from "react";

import "./Search.css";

const Search = props => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResult, setSearchResult] = useState(false);

  const [found, setFound] = useState([]);

  const [notFound, setNotFound] = useState();

  const handleChange = e => {
    setSearchTerm(e.target.value);
    //console.log("You searched " , searchTerm);
    console.log(props.todos);
  };

  const searchItem = () => {
    if (searchTerm.length <= 0) return;
    else {
      console.log("Searching.....");
      const found_res = props.todos.filter(
        val => val.text.toLowerCase() === searchTerm.toLowerCase()
      );

      if (found_res.length > 0) {
        //for 3 seconds delay
        setTimeout(() => {
          setFound(found_res);
          setSearchResult(true);
        }, 2000);

        //console.log(setFound);
        //console.log("found array is " , found);
      } else {
        console.log("Not Found");
        setSearchResult(true);
        setNotFound(true);
      }
    }
  };

  const resetHandler = () => {
    if (searchTerm !== "") {
      // reseting value before searching will result in no output after search
      setSearchResult(false);
      setSearchTerm("");
      setFound([]);
      setNotFound();
    }
  };

  return (
    <div>
      {searchResult ? (
        <div>
          {" "}
          <h3> Search Result </h3>
          {notFound ? (
            <h2 className="notfound"> Sorry No Result Found </h2>
          ) : (
            <ul>
              {found.map(item => {
                return (
                  <div key={item.id} className="list-items">
                    <li key={item.id} className="li-items">
                      {"Item name : " + item.text + "   "}

                      {"Quantity : " + item.quantity}
                    </li>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <div>
            <input
              type="text"
              className="Search-input"
              onChange={handleChange}
              placeholder="Search here..."
            />

            <button
              className="btn  btn-outline-warning mt-2 mb-2"
              onClick={searchItem}
            >
              {" "}
              Search{" "}
            </button>
          </div>
        </div>
      )}
      <button
        className="btn  btn-outline-dark mt-2 mb-2"
        onClick={resetHandler}
      >
        {" "}
        Reset Search
      </button>
    </div>
  );
};

export default Search;
