import React from "react";
import { createPortal } from "react-dom";
import {
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  createContext,
  useContext,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  ReactDOM,
} from "react";
import "./App.css";
import axios from "axios";

/*
function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setList([...list, value]);
    setList([value]);
    setValue("");
    console.log(value);
    console.log(list);
  };

  return (
    <div>
      <h2>React Practice</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} required />
        <button type="submit">submit</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
*/
/*
const App = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setList([...list, task.trim()]);
      setTask("");
    }
  };

  const deleteAll = () => {
    setList([]);
  };

  return (
    <div>
      <h2>My todo list</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} required />
        <button>submit</button>
      </form>

      {list.length === 0 ? (
        <div>No tasks yet</div>
      ) : (
        <ul>
          {list.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}

      <button onClick={deleteAll}>clear all</button>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    const newAge = e.target.value;
    if (newAge >= 0) setAge(newAge);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const resetAll = () => {
    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleName} required />
        <br />
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAge} required />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmail} required />
      </form>
      <div>
        <div>Name:{name}</div>
        <div>Age:{age}</div>
        <div>Email:{email}</div>
      </div>

      <button onClick={resetAll}>Reset</button>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length < 5) {
      setUsernameError("A username should be at least 5 characters long!");
      setTimeout(() => {
        setUsernameError("");
      }, 3000);
    } else if (password.trim() !== confirm.trim()) {
      setPasswordError("You've entered a wrong confirmation password.");
      setTimeout(() => {
        setPasswordError("");
      }, 3000);
    } else {
      setSuccess("Congratulations!You've successfully registered!");
      setUsername("");
      setPassword("");
      setConfirm("");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirm}
          onChange={handleConfirm}
          required
        />
        <br />
        <button>Submit</button>
      </form>
      <div>{passwordError}</div>
      <div>{usernameError}</div>
      <div>{success}</div>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(() => count + 1);
  };

  const decrement = () => {
    setCount(() => count - 1);
  };

  return (
    <div>
      <button onClick={increment}>increment</button>
      <p>Count: {count}</p>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [showCounter, setShowCounter] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide" : "Show"} Counter
      </button>
      {showCounter && <Counter count={count} setCount={setCount} />}
    </div>
  );
};

const Counter = ({ count, setCount }) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default App;
*/
/*
const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleVisibility}>{isVisible ? "Hide" : "Show"}</button>
      <p>{isVisible ? "Hello, I'm visible now!" : null}</p>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <p
        style={{
          padding: 30,
          backgroundColor: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
          transition: "1s",
        }}
      >
        Hello, how are you doing today?
      </p>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Toggle to Light Mode" : "Toggle to Dark Mode"}
      </button>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim().length < 3) {
        setErrorMessage("The name should be at least 3 characters long.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      } else if (password.trim().length < 6) {
        setErrorMessage("The password should be at least 6 characters long.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      } else {
        setSuccessMessage("Congratulations!You've successfully signed up.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        setName("");
        setEmail("");
        setPassword("");
      }
    };

    const handleName = (e) => {
      setName(e.target.value);
    };

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };

    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

    return (
      <div>
        <h3>Sign-up </h3>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleName} required />
          <br />
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmail} required />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            required
          />
          <br />
          <button>Submit</button>
        </form>
        <p>{errorMessage ? errorMessage : successMessage}</p>
      </div>
    );
  };

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password.trim().length < 6) {
        setErrorMessage("The password should be at least 6 characters long.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      } else {
        setSuccessMessage("Congratulations!You've successfully signed in.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        setEmail("");
        setPassword("");
      }
    };

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };

    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

    const handlePasswordVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmail} required />
          <br />

          <label>Password:</label>
          <input
            type={isVisible ? "password" : "text"}
            value={password}
            onChange={handlePassword}
            required
          />
          <br />
          <button>Submit</button>
        </form>
        <p>{errorMessage ? errorMessage : successMessage}</p>
        <button onClick={handlePasswordVisibility}>
          {isVisible ? "Switch to text type" : "Switch to password type"}
        </button>
      </div>
    );
  };

  return (
    <div>
      {isSignUp ? <SignUp /> : <Login />}
      <br />
      <button onClick={toggleSignUp}>
        {isSignUp ? "Toggle to Login" : "Toggle to Sign-up"}
      </button>
    </div>
  );
};

export default App;
*/
/*
const ShoppingCart = ({
  addedProducts,
  handleDelete,
  increaseWeight,
  decreaseWeight,
}) => {
  // console.log(addedProducts);

  return (
    <div style={{ textAlign: "left" }}>
      <h3>The shopping cart</h3>
      <ul style={{ listStyleType: "none" }}>
        {addedProducts.map((item, index) => (
          <li key={index}>
            {item.name}: {item.quantity} kg
            <br />
            Total price: {item.quantity * item.price} soums
            <br />
            <button onClick={() => increaseWeight(index)}>
              increase the quantity
            </button>
            <br />
            <button onClick={() => decreaseWeight(index)}>
              decrease the quantity
            </button>
            <br />
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [added, setAdded] = useState([]);
  const [message, setMessage] = useState("");

  //console.log(added);

  const products = [
    {
      name: "apples",
      price: 10000,
      quantity: 1,
    },
    {
      name: "bananas",
      price: 15000,
      quantity: 1,
    },
    {
      name: "pears",
      price: 12000,
      quantity: 1,
    },
  ];

  const errorMessage = () => {
    setMessage("You've already chosen this product.");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleDelete = (index) => {
    const newList = added.filter((item, i) => i !== index);
    // console.log(newList);
    setAdded(newList);
  };

  const increaseWeight = (index) => {
    setAdded((prevAdded) =>
      prevAdded.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseWeight = (index) => {
    setAdded((prevAdded) =>
      prevAdded.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(0, item.quantity - 1),
            }
          : item
      )
    );
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h3>The list of fruits</h3>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>
            <br />
            price: {item.price} soums/kg
            <br />
            <button
              onClick={() => {
                !added.some((product) => product.name === item.name)
                  ? setAdded((prevAdded) => [...prevAdded, item])
                  : errorMessage();
              }}
            >
              add to the shopping cart
            </button>
          </li>
        ))}
      </ul>
      <p>{message}</p>
      <ShoppingCart
        addedProducts={added}
        handleDelete={handleDelete}
        increaseWeight={increaseWeight}
        decreaseWeight={decreaseWeight}
      />
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAddedSubTask, setIsAddedSubTask] = useState(null);
  const [subTask, setSubTask] = useState("");

  const handleChange = useCallback((e) => {
    setTask(e.target.value);
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setList((prevList) => [
        ...prevList,
        {
          id: Date.now(),
          task: task.trim(),
          isCompleted: isCompleted,
          subtasks: [],
        },
      ]);
    }
    setTask("");
  };

  console.log(list);
  console.log(subTask);

  const toggleTaskCompletion = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const deleteTask = (taskId) => {
    setList((prevList) => prevList.filter((task) => task.id !== taskId));
  };

  const handleSubTask = useCallback((e) => {
    setSubTask(e.target.value);
  }, []);

  const displaySubTaskForm = (id) => {
    setIsAddedSubTask((prevId) => (prevId === id ? null : id));
  };

  const addSubTask = (taskId) => (e) => {
    e.preventDefault();
    setList((prevList) =>
      prevList.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: [
                ...task.subtasks,
                {
                  id: Date.now(),
                  subtask: subTask,
                  isCompleted: false,
                },
              ],
            }
          : task
      )
    );
    setSubTask("");
  };

  const toggleSubTaskCompletion = (subtaskId) => {
    setList((prevList) =>
      prevList.map((task) => ({
        ...task,
        subtasks: task.subtasks.map((subtask) =>
          subtask.id === subtaskId
            ? { ...subtask, isCompleted: !subtask.isCompleted }
            : subtask
        ),
      }))
    );
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <form onSubmit={addTask}>
        <input type="text" value={task} onChange={handleChange} required />
        <button>Add a new task</button>
      </form>
      <ul style={{ listStyleType: "decimal" }}>
        {list.map((task) => (
          <li key={task.id}>
            {task.task}{" "}
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.isCompleted ? "Complete" : "Incomplete"}
            </button>{" "}
            <button onClick={() => displaySubTaskForm(task.id)}>
              {isAddedSubTask === task.id ? "Hide a subtask" : "Show a subtask"}
            </button>{" "}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            {isAddedSubTask === task.id && (
              <div>
                <ul style={{ textAlign: "left" }}>
                  {task.subtasks.map((subtask) => (
                    <li key={subtask.id}>
                      {subtask.subtask}{" "}
                      <button
                        onClick={() => toggleSubTaskCompletion(subtask.id)}
                      >
                        {subtask.isCompleted ? "Complete" : "Incomplete"}
                      </button>
                    </li>
                  ))}
                </ul>
                <form onSubmit={addSubTask(task.id)}>
                  <input
                    type="text"
                    value={subTask}
                    onChange={handleSubTask}
                    placeholder="Add a subtask"
                    required
                  />{" "}
                  <button type="submit">Add Subtask</button>
                </form>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [library, setLibrary] = useState([
    { id: 1, title: "1984", author: "George Orwell", isRead: false },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isRead: true,
    },
  ]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState(2);

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const addNewBook = (e) => {
    e.preventDefault();
    const trimmedAuthor = author.trim();
    const trimmedTitle = title.trim();

    if (!trimmedAuthor || !trimmedTitle) {
      alert("Both author and title are required.");
      return;
    }

    setId((prevId) => prevId + 1);

    setLibrary((prevList) => [
      ...prevList,
      { id: id + 1, title: trimmedTitle, author: trimmedAuthor, isRead: false },
    ]);
    setAuthor("");
    setTitle("");
  };
  console.log(library);

  const toggleRead = (bookId) => {
    setLibrary((prevList) =>
      prevList.map((book) =>
        book.id === bookId ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const deleteBook = (bookId) => {
    setLibrary((prevList) => prevList.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <form onSubmit={addNewBook} style={{ textAlign: "left" }}>
        <label>Author:</label>
        <input type="text" value={author} onChange={handleAuthor} required />
        <br />
        <label>Book:</label>
        <input type="text" value={title} onChange={handleTitle} required />
        <br />
        <button type="submit">Add a new book</button>
      </form>
      <ul style={{ listStyleType: "decimal", textAlign: "left" }}>
        {library.map((book) => (
          <li key={book.id}>
            {book.author} - "{book.title}"
            <button onClick={() => toggleRead(book.id)}>
              {book.isRead ? "Finished" : "Not finished"}
            </button>{" "}
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(Number());
  const [id, setId] = useState(0);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      alert("Title cannot be empty space.");
      return;
    }
    setId((prevId) => prevId + 1);
    setWatchlist((prevList) => [
      ...prevList,
      { id: id + 1, title: trimmedTitle, year: year, isWatched: false },
    ]);
    setTitle("");
    setYear("");
  };

  const toggleWatch = (movieId) => {
    setWatchlist((prevList) =>
      prevList.map((movie) =>
        movie.id === movieId ? { ...movie, isWatched: !movie.isWatched } : movie
      )
    );
  };

  const deleteMovie = (movieId) => {
    setWatchlist((prevList) =>
      prevList.filter((movie) => movie.id !== movieId)
    );
  };
  console.log(watchlist);
  return (
    <div>
      <h3>Movie Watchlist</h3>
      <form onSubmit={addMovie}>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitle} required />
        <br />
        <label>Year:</label>
        <input type="number" value={year} onChange={handleYear} required />
        <br />{" "}
        <button type="submit" style={{ marginTop: 10 }}>
          Add Movie
        </button>
      </form>
      <br />

      <ul style={{ listStyle: "decimal", textAlign: "left" }}>
        {watchlist.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong>({movie.year})
            <button onClick={() => toggleWatch(movie.id)}>
              {movie.isWatched ? "Watched" : "Unwatched"}
            </button>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [showPurchased, setShowPurchased] = useState(false);

  const handleItem = (e) => {
    setItem(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addItem = (e) => {
    const trimmedItem = item.trim();

    e.preventDefault();
    setGroceryList((prevList) => [
      ...prevList,
      {
        id: Date.now(),
        name: trimmedItem,
        quantity: Number(quantity),
        isPurchased: false,
      },
    ]);
    setItem("");
    setQuantity("");
  };

  const togglePurchase = (itemId) => {
    setGroceryList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, isPurchased: !item.isPurchased } : item
      )
    );
  };

  const deleteItem = (itemId) => {
    setGroceryList((prevList) => prevList.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setGroceryList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setGroceryList((prevList) =>
      prevList.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  };

  const filteredList = showPurchased
    ? groceryList
    : groceryList.filter((item) => !item.isPurchased);

  console.log(groceryList);

  return (
    <div>
      <form onSubmit={addItem}>
        <label>Name:</label>
        <input type="text" value={item} onChange={handleItem} required />
        <br />
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantity}
          required
        />
        <br />
        <button type="submit" style={{ marginTop: 10 }}>
          Add Item
        </button>
      </form>
      <h3>Grocery List</h3>
      <button onClick={() => setShowPurchased(!showPurchased)}>
        {showPurchased ? "Show Unpurchased Only" : "Show All"}
      </button>
      <ul style={{ listStyle: "decimal", textAlign: "left" }}>
        {filteredList.map((item) => (
          <li key={item.id}>
            {item.name} {item.quantity} kg
            <button
              onClick={() => increaseQuantity(item.id)}
              aria-label="increase quantity"
            >
              Increase
            </button>
            <button onClick={() => decreaseQuantity(item.id)}>Decrease</button>{" "}
            <button onClick={() => togglePurchase(item.id)}>
              {item.isPurchased ? "Purchased" : "Mark as Purchased"}
            </button>{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;


const App = () => {
  const [data, setData] = useState("Old data");

  useEffect(() => {
    setTimeout(() => {
      console.log("Fetching data from an API");
      setData("New fetched data");
    }, 3000);
  }, []);

  return <div>{data}</div>;
};

export default App;
*/
/*
const App = () => {
  const [data, setData] = useState("Old data");
  const [fetchData, setFetchData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fetchData) {
      setLoading(true);
      setTimeout(() => {
        console.log("Fetching data...");
        setData("New fetched data");
        setFetchData(false);
        setLoading(false);
      }, 3000);
    }
  }, [fetchData]);

  const handleData = () => {
    if (!fetchData) {
      setData("Old data");
    }

    setFetchData(true);
  };

  return (
    <div>
      {loading ? "Loading..." : data}
      <br />
      <button onClick={handleData}>Fetch new data</button>
    </div>
  );
};

export default App;
*/
/*
const App = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setPost((prevPost) => ({ ...prevPost, ...response.data }));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  console.log(post);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "decimal" }}>
          <li key={post.id}>
            <p>
              <strong>{post.title}</strong>
            </p>
            {post.body}
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;


const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //console.log(count);
  return <div>{count}</div>;
};

export default App;


const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [person, setPerson] = useState([]);

  useEffect(() => {
    name || age
      ? console.log("Name or Age changed.")
      : console.log("Nothing has changed.");
  }, [name, age]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(Number(e.target.value));
  };

  const handleChanges = (e) => {
    e.preventDefault();
    setPerson((prevPerson) => [...prevPerson, { name: name, age: age }]);
    setName("");
    setAge(0);
  };

  return (
    <div>
      <form onSubmit={handleChanges}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleName} required />
        <br />
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAge} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {person.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(() => window.innerWidth);
      console.log("Window is resized.");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div>{windowWidth}</div>;
};

export default App;


const App = () => {
  const [count, setCount] = useState(0);

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    const changeColor = (color) => {
      const elem = document.getElementById("color_change");
      elem.style.backgroundColor = color;
    };
    if (count === 0) {
      changeColor("white");
    } else if (count % 5 === 0) {
      changeColor(randomColor());
    }
  }, [count]);

  return (
    <>
      <div id="color_change" style={{ padding: "20px", fontSize: "24px" }}>
        {count}
      </div>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default App;


const App = () => {
  const [opacity, setOpacity] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!isFading || opacity <= 0) return;

    const intervalId = setInterval(() => {
      setOpacity((prev) => {
        if (prev <= 0.1) {
          setIsFading(false);
          return 1;
        }
        return prev - 0.1;
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, [isFading, opacity]);

  const handleClick = () => {
    // setOpacity(1);
    setIsFading(true);
  };

  return (
    <div>
      <p id="change_opacity" style={{ opacity }}>
        Hello.My name is Zafar and I'm eleven years old.
      </p>
      <br />
      <button onClick={handleClick}>Click to fade</button>
    </div>
  );
};

export default App;


const App = () => {
  const [count, setCount] = useState(10);
  const [isCounting, setIsCounting] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!isCounting) return;

    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          setIsCounting(false);
          setMessage("Time's up!");
          setTimeout(() => setMessage(null), 3000);
          return 10;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isCounting]);

  const handleCounting = () => {
    setIsCounting(true);
  };

  //console.log(count);

  return (
    <div>
      <div>
        <h3>{message}</h3>
      </div>
      {count}
      <br />
      <button onClick={handleCounting} disabled={isCounting}>
        Start
      </button>
    </div>
  );
};

export default App;


const App = () => {
  const [isToggling, setIsToggling] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    if (!isToggling) return;

    const intervalId = setInterval(() => {
      setBgColor((prevColor) =>
        prevColor === "lightblue" ? "lightcoral" : "lightblue"
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isToggling]);

  const handleStart = () => {
    setIsToggling(true);
  };

  const handleStop = () => {
    setIsToggling(false);
    setBgColor("white");
  };

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <button onClick={handleStart} disabled={isToggling}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isToggling}>
        Stop
      </button>
    </div>
  );
};

export default App;


const RandomUser = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          console.log(response.data.results);
          const userData = response.data.results;
          setUser((prevUser) => [
            ...prevUser,
            {
              id: userData[0].login.uuid,
              firstName: userData[0].name.first,
              lastName: userData[0].name.last,
              email: userData[0].email,
              profile: userData[0].picture.medium,
            },
          ]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }, 1500);
  };

  const deleteUser = (userId) => {
    setUser((pervUser) => pervUser.filter((user) => user.id !== userId));
  };

  console.log(user);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul style={{ listStyleType: "decimal" }}>
            {user.map((user) => (
              <li key={user.id}>
                {user.firstName} {user.lastName}
                <br />
                {user.email}
                <br />
                <img
                  src={user.profile}
                  alt={`${user.firstName} ${user.lastName}`}
                />
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={() => fetchUser()}>Fetch New User</button>
        </>
      )}
    </div>
  );
};

export default RandomUser;


const TopNews = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetchNews(controller.signal);

    return () => {
      console.log("Component unmounting, canceling request...");
      controller.abort();
    };
  }, []);

  const fetchNews = (signal) => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=22f3ab1ffb0d4633b8b86cd576a8b045",
          { signal }
        )
        .then((response) => {
          // console.log(response);
          const fetched = response.data.articles;
          setArticles(fetched);
          setIsLoading(false);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request cancelled:", error.message);
          } else {
            setError("Failed to fetch news. Please try again later.");
            console.error("Request failed", error);
          }

          setIsLoading(false);
        });
    }, 1500);
  };
  console.log(articles);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul style={{ listStyleType: "decimal" }}>
            {articles.map((news, index) => (
              <li
                key={index}
                style={{ border: "solid", marginBottom: 5, borderRadius: 20 }}
              >
                <h4>{news.title}</h4>
                <br />
                {news.description}
                <br />
                {news.source.name}
                <br />
                {new Date(news.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                <br />
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
                <br />
                {news.urlToImage && (
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    style={{ width: 500, height: 350 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <button onClick={() => fetchNews(new AbortController().signal)}>
            Refresh News
          </button>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

const App = () => {
  const [showNews, setShowNews] = useState(true);

  return (
    <div>
      <button onClick={() => setShowNews(!showNews)}>
        Toggle News Component
      </button>
      {showNews && <TopNews />}
    </div>
  );
};

export default App;


const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [queryCity, setQueryCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!queryCity) return;

    setIsLoading(true);
    const controller = new AbortController();

    setTimeout(() => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=82e1d3407191040b5b78e5fc639031b4&units=metric`,
          { signal: controller.signal }
        )
        .then((response) => {
          console.log(response);
          setWeatherData({
            cityName: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
          });
          setError("");
          setCity("");
        })
        .catch((error) => {
          if (error.name === "CanceledError") return;
          setError(
            "Failed to fetch the weather forecast. Please try again later."
          );
        })
        .finally(() => setIsLoading(false));
    }, 1000);

    return () => controller.abort();
  }, [queryCity]);

  // console.log(weatherData);
  // console.log(city);

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();

    if (trimmedCity) {
      setQueryCity(trimmedCity);
      setError("");
    } else {
      setError("Please enter a valid city name.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>City:</label>
        <input type="text" value={city} onChange={handleCity} required /> <br />
        <button type="submit" style={{ marginTop: 10 }} disabled={isLoading}>
          {isLoading ? "Loading..." : "Fetch Weather"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <ul style={{ listStyle: "none" }}>
          <li>City: {weatherData.cityName}</li>
          <br />
          <li>Temperature: {weatherData.temperature}&#8451;</li> <br />
          <li>Description: {weatherData.description}</li> <br />
          <li>Humidity: {weatherData.humidity}%</li>
        </ul>
      )}
    </div>
  );
};

export default WeatherInfo;


const Card = ({ greeting, changeGreeting }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {greeting}
      <br />
      <button onClick={changeGreeting}>Change</button>
    </div>
  );
};

const App = () => {
  const [greeting, setGreeting] = useState("Hello, how are you?");
  const [toggle, setToggle] = useState(true);

  const changeGreeting = () => {
    //const newToggle = !toggle;
    // setToggle(newToggle); // Update toggle state
    // setGreeting(newToggle ? "Hey, how is it going?" : "Hello, how are you?");

    setToggle((prevToggle) => {
      const newToggle = !prevToggle;
      setGreeting(newToggle ? "Hey, how is it going?" : "What's up?");
      return newToggle;
    });
  };
  console.log(toggle);

  return <Card greeting={greeting} changeGreeting={changeGreeting} />;
};

export default App;

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h1>Hello, World!</h1>
      <p>This is some content inside the Card component.</p>
    </Card>
  );
}
export default App;


const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ padding: "10px", backgroundColor: "blue", color: "white" }}
    >
      {children}
    </button>
  );
};

const App = () => {
  return (
    <div>
      <Button onClick={() => alert("Button clicked")}>Click me</Button>
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default App;


const Wrapper = ({ children, toggle }) => {
  return (
    <div
      style={{
        border: "2px solid",
        backgroundColor: toggle ? "lightblue" : "lightgreen",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      {children}
    </div>
  );
};

const Button = ({ children, changeBackground }) => {
  return (
    <button onClick={changeBackground} title="Toggle Background">
      {children}
    </button>
  );
};

const App = () => {
  const [toggle, setToggle] = useState(true);

  const changeBackground = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Wrapper toggle={toggle}>
        <h1>Hello, World!</h1>
        <p>This is a paragraph inside the wrapper.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <Button changeBackground={changeBackground}>Click me</Button>
      </Wrapper>
    </div>
  );
};

export default App;


const Counter = () => {
  const count = useRef(0);

  const increment = () => {
    count.current += 1;
    console.log(count.current);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const PreviousValue = () => {
  const [value, setValue] = useState("");
  const previousValue = useRef("");

  useEffect(() => {
    previousValue.current = value;
  });

  console.log(previousValue);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Current: {value}</p>
      <p>Previous: {previousValue.current}</p>
    </div>
  );
};

const AnimatedBox = () => {
  const boxRef = useRef(null);

  const animate = () => {
    boxRef.current.style.transform = "translateX(100px)";
    boxRef.current.style.transition = "transform 0.5s";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "100px", height: "100px", background: "blue" }}
      ></div>
      <button onClick={animate}>Animate</button>
    </div>
  );
};

const Timer = () => {
  const count = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count.current += 1;
      console.log(count.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Check the console for updates!</div>;
};

const TrackScroll = () => {
  const scrollPosition = useRef();

  const handleScroll = () => {
    scrollPosition.current = window.scrollY;
    console.log(scrollPosition.current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh" }}>Scroll to see updates in the console.</div>
  );
};

const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something here..."
        onFocus={() => console.log("Input is focused!")}
      />
      <button onClick={handleFocus}>Focus Input</button>
        <Counter />
      <PreviousValue />
  <AnimatedBox />
  <Timer />
      <TrackScroll />
    </div>
  );
};

export default App;


const App = () => {
  const [second, setSecond] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }
    console.log(second);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    console.log(second);
  };

  const resetTimer = () => {
    stopTimer();
    setSecond(0);
  };

  return (
    <div>
      {second} s<br />
      <button onClick={startTimer}>Start</button>
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default App;


const App = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
    console.log(inputElement);
  };

  const selectInput = () => {
    inputElement.current.select();
    // console.log(inputElement.current);
  };

  const clearInput = () => {
    inputElement.current.value = "";
  };

  return (
    <div>
      <input
        type="text"
        ref={inputElement}
        placeholder="Type something..."
        onFocus={() => console.log("Input is focused!")}
      />
      <br />
      <button onClick={focusInput} style={{ margin: "5px", padding: "5px" }}>
        Focus Input
      </button>
      <br />
      <button onClick={selectInput} style={{ margin: "5px", padding: "5px" }}>
        Select Input
      </button>
      <br />
      <button onClick={clearInput} style={{ margin: "5px", padding: "5px" }}>
        Clear Input
      </button>
    </div>
  );
};

export default App;


const App = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const count = useRef(0);

  const startTimer = () => {
    if (!count.current) {
      count.current = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (count.current) {
      clearInterval(count.current);
      count.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setSecond(0);
    setMinute(0);
    setHour(0);
  };

  useEffect(() => {
    if (second === 60) {
      setMinute((prev) => prev + 1);
      setSecond(0);
    }
  }, [second]);

  useEffect(() => {
    if (minute === 60) {
      setHour((prev) => prev + 1);
      setMinute(0);
    }
  }, [minute]);

  useEffect(() => {
    return () => {
      if (count.current) {
        clearInterval(count.current);
      }
    };
  }, []);

  const formatTime = (value) => (value < 10 ? "0" + value : value);

  // console.log(count);
  // console.log(second);

  return (
    <div>
      <h2>Stop Watch</h2>
      {formatTime(hour)} h: {formatTime(minute)} m: {formatTime(second)}s <br />
      <button onClick={startTimer} style={{ margin: "5px", padding: "5px" }}>
        Start
      </button>
      <br />
      <button onClick={pauseTimer} style={{ margin: "5px", padding: "5px" }}>
        Pause
      </button>
      <br />
      <button
        onClick={resetTimer}
        style={{ margin: "5px", padding: "5px" }}
        disabled={second === 0 && minute === 0 && hour === 0}
      >
        Reset
      </button>
      <br />
    </div>
  );
};

export default App;


const App = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null)];
  let currentFocusIndex = 0;

  const focusOn = (e) => {
    e.preventDefault();
    currentFocusIndex = (currentFocusIndex + 1) % inputRefs.length;
    inputRefs[currentFocusIndex].current.focus();
  };

  return (
    <div>
      <form>
        <label>First Name: </label>
        <input
          type="text"
          ref={inputRefs[0]}
          placeholder="Type something here..."

          //style={{ backgroundColor: isFocused ? "antiquewhite" : "white" }}
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          ref={inputRefs[1]}
          placeholder="Type something here..."

          //style={{ backgroundColor: isFocused ? "lightblue" : "white" }}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          ref={inputRefs[2]}
          placeholder="Type something here..."

          //style={{ backgroundColor: isFocused ? "lightgreen" : "white" }}
        />
      </form>

      <br />
      <button onClick={focusOn} style={{ margin: "15px", padding: "10px" }}>
        Focus Next
      </button>
    </div>
  );
};

export default App;

import Me2022 from "./assets/Me2022.jpg";
import Mukaddam2022 from "./assets/Mukaddam2022.jpg";
import Sarvinozik2022 from "./assets/Sarvinozik2022.jpg";

const App = () => {
  const images = [Me2022, Mukaddam2022, Sarvinozik2022];
  const imageRefs = useRef(images.map(() => React.createRef()));
  const currentIndex = useRef(0);

  const getNextIndex = (currentIndex, length) => (currentIndex + 1) % length;

  const getPrevIndex = (currentIndex, length) =>
    (currentIndex - 1 + length) % length;

  const nextImage = () => {
    currentIndex.current = getNextIndex(currentIndex.current, images.length);

    imageRefs.current[currentIndex.current].current.focus();

    console.log(`Focused on image index: ${currentIndex.current}`);
    updateImageVisibility();
  };

  const previousImage = () => {
    currentIndex.current = getPrevIndex(currentIndex.current, images.length);

    imageRefs.current[currentIndex.current].current.focus();
    updateImageVisibility();
  };

  const updateImageVisibility = () => {
    imageRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.style.display =
          index === currentIndex.current ? "block" : "none";
      }
    });
  };

  useEffect(() => {
    updateImageVisibility();
  }, []);

  return (
    <div>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          ref={imageRefs.current[index]}
          tabIndex={0}
          style={{
            display: currentIndex.current === index ? "block" : "none",
            height: 250,
            width: 250,
          }}
        />
      ))}

      <br />
      <button onClick={nextImage} style={{ margin: "10px", padding: "10px" }}>
        Next
      </button>
      <br />
      <button
        onClick={previousImage}
        style={{ margin: "10px", padding: "10px" }}
      >
        Previous
      </button>
    </div>
  );
};

export default App;
*/
// The useRef hook is used:
// 1) to access the DOM elements directly
/*
const App = () => {
  const currentFocus = useRef();

  const handleFocus = () => {
    currentFocus.current.focus();
    console.log("Input is focused.");
  };

  const handleSelect = () => {
    currentFocus.current.select();
    console.log("Input is selected.");
    console.log(currentFocus.current.value);
  };

  const clearSelected = () => {
    currentFocus.current.value = "";
    console.log("Input is cleared.");
  };
  return (
    <div>
      <input type="text" ref={currentFocus} placeholder="Type something..." />
      <br />
      <button onClick={handleFocus} style={{ margin: "10px", padding: "10px" }}>
        Focus
      </button>
      <br />
      <button
        onClick={handleSelect}
        style={{ margin: "10px", padding: "10px" }}
      >
        Select
      </button>
      <br />
      <button
        onClick={clearSelected}
        style={{ margin: "10px", padding: "10px" }}
      >
        Clear
      </button>
    </div>
  );
};

export default App;*/

//2) to store a mutable value that doesn't cause re-renders
/*
const App = () => {
  const [timer, setTimer] = useState(0);
  const count = useRef(null);

  const startCount = () => {
    if (!count.current) {
      count.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopCount = () => {
    if (count.current) {
      clearInterval(count.current);
      count.current = null;
    }
  };

  const resetCount = () => {
    stopCount();
    setTimer(0);
  };

  console.log(count.current);

  useEffect(() => {
    return () => {
      if (count.current) {
        clearInterval(count.current);
      }
    };
  }, []);

  return (
    <div>
      {timer}
      <br />
      <button onClick={startCount}>Start</button>
      <br />
      <button onClick={stopCount}>Stop</button>
      <br />
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default App;


const App = () => {
  const renderCount = useRef(0);
  const [name, setName] = useState("");

  renderCount.current++;

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type you name"
      />
      <p>Your name is: {name}</p>
      <p>
        This component has rendered <strong>{renderCount.current}</strong>{" "}
        times.
      </p>
    </div>
  );
};

export default App;


const Greeting = memo(({ name }) => {
  console.log("Greeting rendered");
  return <h2>Hello, {name}!</h2>;
});

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
    console.log("count rendered");
  };

  return (
    <div>
      <Greeting name="Bob" />
      <button onClick={handleCount}>Increment: {count}</button>
    </div>
  );
};

export default App;

const ThemeContext = createContext("light");

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme === "dark" ? "#777" : "#FFF",
        color: theme === "dark" ? "#FFF" : "#000",
      }}
    >
      Theme is {theme}
    </button>
  );
};

const AppWithProvider = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
};

const AppWithoutProvider = () => {
  return <ThemedButton />;
};

const App = () => {
  return (
    <div>
      <h2>With Provider:</h2>
      <AppWithProvider />
      <h2>Without Provider (Default Value):</h2>
      <AppWithoutProvider />
    </div>
  );
};

export default App;

const ThemeContext = createContext();

const ThemedButton = ({ handleColor }) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button
        style={{
          background: theme === "dark" ? "#777" : "#FFF",
          color: theme === "dark" ? "#FFF" : "#000",
        }}
        onClick={handleColor}
      >
        Toggle Themes
      </button>
    </div>
  );
};

const App = () => {
  const [color, setColor] = useState("dark");

  const handleColor = () => {
    setColor((prevColor) => (prevColor === "dark" ? "light" : "dark"));
  };
  return (
    <div>
      <ThemeContext.Provider value={color}>
        <ThemedButton handleColor={handleColor} />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;


const userContext = createContext("Zafarchik");

const Greeting = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h2>{`Hello, my name is ${user}`}</h2>
    </div>
  );
};

const AnotherGreeting = () => {
  return <Greeting />;
};

const App = () => {
  const [name, setName] = useState("Sarvinoz");
  return (
    <div>
      <Greeting />
      <userContext.Provider value={name}>
        <AnotherGreeting />
      </userContext.Provider>
    </div>
  );
};

export default App;

const UserContext = createContext();

const LoginButton = ({ handleLogin }) => {
  const logged = useContext(UserContext);
  //console.log(logged);
  return (
    <div>
      <button onClick={handleLogin}>
        {logged.isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
};

const UserGreeting = () => {
  const loggedUser = useContext(UserContext);
  console.log(loggedUser);
  return (
    <div>
      {loggedUser.isAuthenticated
        ? `Welcome, ${loggedUser.username}!`
        : "Please log in."}
    </div>
  );
};

const UsernameInput = ({ name, handleName }) => (
  <input
    type="text"
    onChange={handleName}
    value={name}
    style={{ margin: 10 }}
    required
  />
);

const App = () => {
  const [logging, setLogging] = useState({
    isAuthenticated: false,
    username: "",
  });
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!logging.isAuthenticated && name.trim() === "") {
      alert("Please enter a username before logging in.");
      return;
    }

    setLogging((prev) => ({
      ...prev,
      isAuthenticated: !prev.isAuthenticated,
      username: prev.isAuthenticated ? "" : name.trim(),
    }));
    setName("");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <UserContext.Provider value={logging}>
        <UserGreeting />
        {!logging.isAuthenticated && (
          <UsernameInput name={name} handleName={handleName} />
        )}

        <LoginButton handleLogin={handleLogin} />
      </UserContext.Provider>
    </div>
  );
};

export default App;


const CartContext = createContext();

const ProductList = () => {
  const { products, addToCart } = useContext(CartContext);

  //console.log(products);
  return (
    <div>
      <h3>Available Products</h3>
      <ul style={{ listStyle: "decimal", textAlign: "left" }}>
        {products.map((item) => (
          <li key={item.id}>
            <span
              style={{
                display: "inline-block",
                width: 60,
                padding: 20,
              }}
            >
              {item.name}
            </span>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = () => {
  const { chosenItems, clearCart } = useContext(CartContext);

  const totalPrice = () => {
    return chosenItems.reduce((a, b) => a + b.price * b.quantity, 0);
  };

  return (
    <div>
      <h3>Cart</h3>
      <ul style={{ listStyle: "none" }}>
        {chosenItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          chosenItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}$/kg (x{item.quantity})
            </li>
          ))
        )}
      </ul>
      <h4>Total price:{totalPrice()} $</h4>
      <button onClick={clearCart} style={{ padding: 10 }}>
        Clear Cart
      </button>
    </div>
  );
};

const App = () => {
  const listOfProducts = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 5 },
    { id: 3, name: "Peach", price: 8 },
    { id: 4, name: "Orange", price: 10 },
  ];

  const [products, setProducts] = useState(listOfProducts);
  const [chosenItems, setChosenItems] = useState([]);

  const addToCart = (itemId) => {
    setChosenItems((prev) => {
      const existingItem = prev.find((item) => item.id === itemId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const newItem = products.find(({ id }) => id === itemId);
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  //console.log(chosenItems);

  const clearCart = () => {
    setChosenItems([]);
  };

  return (
    <div>
      <CartContext.Provider
        value={{ products, chosenItems, addToCart, clearCart }}
      >
        <ProductList />
        <Cart />
      </CartContext.Provider>
    </div>
  );
};

export default App;


const App = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Input value: ${inputRef.current.value}`);
    inputRef.current.value = "";
  };
  return (
    <React.Fragment>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </React.Fragment>
  );
};

export default App;


const App = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const width = document.getElementById("myDiv").offsetWidth;
    console.log("Width measured with useEffect:", width);
    setSize(width);
  }, []);

  return (
    <div id="myDiv" style={{ width: size + 10 }}>
      Hello, world!
    </div>
  );
};

export default App;


const App = () => {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    const width = document.getElementById("myDiv").offsetWidth;
    console.log("Width measured with useLayoutEffect:", width);
    setSize(width);
  }, []);

  return (
    <div id="myDiv" style={{ width: size + 10 }}>
      Hello, world!
    </div>
  );
};

export default App;

function App() {
  useEffect(() => {
    console.log("Effect runs after every render.");
  }, []);

  return (
    <div>
      Hello, world!
      <Greeting />
      <Today />
    </div>
  );
}

const Greeting = function () {
  return <div>How is it going?</div>;
};

const Today = () => {
  return <div>How are you doing today?</div>;
};

export default App;


const Wrapper = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child) =>
        child.type === "h1"
          ? React.cloneElement(child, { style: { color: "blue" } })
          : child
      )}
    </div>
  );
};

const App = () => {
  return (
    <Wrapper>
      <h1>Title</h1>
      <p>Some text</p>
    </Wrapper>
  );
};

export default App;

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} type="text" />;
});

function App() {
  const childRef = useRef();
  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={() => childRef.current.focusInput()}>Focus Input</button>
      <button onClick={() => childRef.current.clearInput()}>Clear Input</button>
    </div>
  );
}

export default App;


const Modal = ({ children }) => {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
};

const App = () => {
  const handleClick = () => {
    console.log("Parent Clicked!");
  };
  return (
    <div onClick={handleClick}>
      <h1>Main App</h1>
      <Modal>
        <p>This is rendered via a React Portal!</p>
        <button>Click Me</button>
      </Modal>
    </div>
  );
};

export default App;
*/

const App = () => {
  return (
    <form>
      <label>
        Do you agree?
        <input type="checkbox" defaultChecked={true} />
      </label>
    </form>
  );
};

export default App;
