export const appHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

// Content-Type: Specifies the media type of the content in the response body (e.g., Content-Type: application/json or Content-Type: text/html). This header tells the client how to interpret the response data.

// Content-Length: Indicates the size of the response body in bytes (e.g., Content-Length: 1234). This header is useful for clients to know how much data to expect.

// Cache-Control: Provides directives for caching mechanisms (e.g., Cache-Control: max-age=3600, public). It controls caching behavior on the client side and intermediary caches.

// Expires: Specifies the date/time after which the response is considered stale (e.g., Expires: Wed, 21 Mar 2024 20:00:00 GMT). It is an alternative to Cache-Control for specifying caching behavior.

// ETag: Provides a unique identifier for the current version of the resource (e.g., ETag: "abc123"). It is used for cache validation to determine if the resource has changed.

// Last-Modified: Specifies the date/time when the resource was last modified (e.g., Last-Modified: Wed, 21 Mar 2024 18:00:00 GMT). It is used for cache validation similar to ETag.

// Location: Specifies the URL to redirect the client to (e.g., Location: https://www.example.com/new-page). It is used in redirect responses (status codes 3xx).

// Set-Cookie: Sets a cookie on the client's browser (e.g., Set-Cookie: sessionId=abc123; Path=/; Secure; HttpOnly). It is used for session management and maintaining state.

// Access-Control-Allow-Origin: Specifies which origins are allowed to access the resource in cross-origin requests (e.g., Access-Control-Allow-Origin: * or Access-Control-Allow-Origin: https://www.example.com). It is used in CORS (Cross-Origin Resource Sharing) responses.
