const API = 'https://api.themoviedb.org/3';

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjE3MTA2NzNhMGRlMjIxNDRmOTAxNDg1YjIyMzEwNiIsInN1YiI6IjYxMDM3ZGFmNDJkODM3MDAyZGUyYTIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FxmflLCnmO_KL0t7MkLkw2p_TVlvlOLbuYHDxkxjAj0',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((result) => result.json());
}
