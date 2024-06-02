import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAACUCAMAAAAeaLPCAAAAM1BMVEXk5ueutLemrbDs7e7n6eqrsbTh4+Td4OG5vsG2u77GyszY29zO0dPS1deyuLvDx8miqK3CmS5uAAAEnUlEQVR4nO2c23LrIAxFDRYYzK3//7VHOG6bJmnDRbHIHO+ZTF6X8UYIkDxNp06dOnXq1H8pyOKGqBciLy74rKCn93kAmLTzKSoppULlP5vCMr3BOwAdVoPM4oeUFMa7wd8AgDfxlnznV9GEkUd/9lE8JN/5hXXzoPjg4h/kF0mjuTEfCfT62C+37vHjWR+cKUDfBj8tg9GDf26Zr8G3bih6WEvJN3oRRqJfi4d9t85A9LXsA9FDPTtaZwx68A3sQsQRZi2EFvQcc/gjJmjbNPBIb7jZpyk1suOkXZmHvtHwOz2zcXT5wnovZVjhod00G71npZc97EJYxgR5Nn3sQvDNWVi6TCOy6xc2+D7Hb/RcWQIssZedb6UC382O9Fy+6XcNwq8s6OD6XYOKLKaHQDDwmCPwhPqWPcgDeM/BrrtXqIvMzADfvULtUhzwrjOv+YLnMH1PJv8DnmORpYjymxjyYiCar0IkBnj7zvBU7IJhMwhUln9veHvCn/D14vA8STa/wR+f3EDpBdpTMcR5uvSA4+zmrRMzspSY4/xgoYLn2IFronATOXZSmmjG8py10sxY6TjYiQ6dWCyfzz4ojvs4lqip8eb7VjyuofGNilwXOwR7cMVy2LfBN97cX4mxAqE7LVaJCz0PfWeKwFr6AT0X4IInlf9WX2qpONE7Y73kvb3HxLi13Ia9bmLqCZcqst1+f9M3Z8YjlMhBm3EUd53TRU3xkiubvFPDpB2hOm5XNT2yDzLwUzW9TAOxo2p2VUzFEr9rLi5CVxzXf08Eocw6yvCX4d4LloKmERXXsez+rcXIv/HVcP0iVwJnfx99JY0eFx0F85KiuO/0wkeKq+Y4lawSzFNIxgp1aRDMfypas4ZpePRNANoFvyaTldLqg9MjdwXeKjfxar2gtH6HZtJrwXyj4fEvA6xzBzKa3u5+FyKid9A6+R2M+RbQ5otzYTWfHcg3sSZ3JCthEtp/Gcr/yLIEnJ7I/WSFzY+AT7AGN8YbwMjo0CTxrnP6r0dAJ6XA/gJmcA/XpOcPgD/rWUO/Mx89x31KWp7vCuA65GP/TawUyR2d8IAOqcEsj6SU8UemmqBXQ4S+4QubloPcD7MX5aGlVIdsyQECPbnIkze9+moNvW6J6iXu8YV/6dTFqP6SYd8lzes+BwLT2nmL80xKvGqPO7v2e4QK+VfEHVhfZfafkvRHsKDNMez5aIf4fhOOscxOT3seCJ5wQS3BJ7x5mMlKKIvpDVWyD4fZ/Yo+Ei1Yh4/7Rk/yTQeSYiwuepZxv9D3OoegU7qdvrPblKQGrp2+qzihuxiol76jEAocK3pW81oLHeUoZGotu+Q1/EWqtZXH8bPnC+e2/J6b+6Kmj+BwRvgfsg3smjdKXqk+4sxMKc296tOEAUL8l6q/P0TXf9YvzC8rB56s849AKtSN/ADr07cqC9IWstZ6Eskq39B8QIVMdTWYoyxQn6rqRxppumbV+IaqZ5FMNb6hanWlky3OLfs/DEev4oGfR3ONqNhRwQc36r2K85vh5quo6JplPvB4qNJDb/AfcjiVb8RvK8QG0Ai1RadOcesf92tC87SKhjoAAAAASUVORK5CYII=",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
