import { useState, useCallback, useEffect, useRef } from "react";
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
*/

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
