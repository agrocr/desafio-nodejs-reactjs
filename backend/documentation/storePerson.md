## **Store Person**

Store a person on database.

- **URL**

  /people

- **Method:**

  `POST`

- **URL Params**
  **Required:**

  None

  **Optional:**

  None

- **Data Params**

  `{ name: "Ana", gender: "female", age: 24 }`

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**
    `{ id : 12, name: "Ana", gender: "female", age: 24 }`

- **Error Response:**

  None

- **Sample Call:**

  ```
  $.ajax({
    url: "/people",
    dataType: "json",
    type : "POST",
    data: {...},
    success : function(r) {
      console.log(r);
    }
  });
  ```
