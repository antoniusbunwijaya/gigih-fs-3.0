#Video Thumbnail
* Video Thumbnail object
```
{
  videoId: object
  url_image_thumbnail: string
}
```
**GET /video-thumbnails** ***(mandatory)***
----
Returns all video-thumbnail in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:**
* **Code:** 200  
  **Content:** `{message: success}`

* **Error Response:**
* **Code:** 500  
  **Content:** `{message: fail, error : <error.message> }`

**GET /video-thumbnails/:videoId/products** ***(mandatory)***
----
Returns all Products associated with specified video-thumbnails.
* **URL Params**  
  *Required:* `videoId=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:**
* **Code:** 200  
  **Content:**
```
{
  products: [
           {<products_object>},
           {<products_object>},
           {<products_object>}
         ]
}
```
* **Error Response:**
    * **Code:** 404  
      **Content:** `{ error : "Video Thumbnail doesn't exist" }`
  
**GET /video-thumbnails/:videoId/comments** ***(mandatory)***
----
Returns all Comments associated with the specified video-thumbnails.
* **URL Params**  
  *Required:* `videoId=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:**
* **Code:** 200  
  **Content:**
```
{
  orders: [
           {<order_object>},
           {<order_object>},
           {<order_object>}
         ]
}
```
* **Error Response:**
    * **Code:** 404  
      **Content:** `{ error : "Video Thumbnail doesn't exist" }`  

   
**POST /video-thumbnails/:videoId/comments** ***(mandatory)***
----
Creates a new Comments associated with the specified video-thumbnails and returns the new object.
* **URL Params**  
  *Required:* `videoId=[string]`
* **Headers**  
  Content-Type: application/json
* **Data Params**
```
  {
    username: string,
    comment: string
  }
```
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ status : success }`
* **Error Response:**
* **Code:** 404  
  **Content:** `{status: fail, error : "Video Thumbnail doesn't exist" }`
* **Code:** 400 

  **Content:** `{status: fail, error : <error.message> }`

**POST /video-thumbnails/:videoId/products** 
----
Creates a new Product associated with the specified video-thumbnails and returns the new object.
* **URL Params**  
  *Required:* `videoId=[string]`
* **Headers**  
  Content-Type: application/json
* **Data Params**
```
  {
    linkProduct: string,
    title: string,
    price: number
  }
```
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ status: success }`

* **Error Response:**
* **Code:** 404  
  **Content:** `{ status:fail, error : "Video Thumbnail doesn't exist" }`
* **Code:** 400

  **Content:** `{ status: fail, error : <error.message> }`

**POST /video-thumbnails** 
----
Creates a new Video Thumbnail the new object.
* **URL Params**  
  none
* **Headers**  
  Content-Type: application/json
* **Data Params**
```
  {
    urlImageThumbnail: string,
  }
```
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ <video_thumbnails_object> }`
* **Error Response:**
* **Code:** 400  
  **Content:** `{ error : <error.message> }`
