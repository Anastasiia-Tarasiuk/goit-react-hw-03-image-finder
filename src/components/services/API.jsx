import axios from "axios";
// import React, { Component } from "react";

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '27618691-16873fc26bb6498af6bbdd835';
const perPage = 12;


export const apiSearch = async (searchValue, page) => {
    const response = await axios(`api/`, {
        params: {
            key: API_KEY,
            q: searchValue,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: page,
            per_page: perPage,
        }
    });
    // page += 1;
    return response.data;
}


// export class apiSearch extends Component {
//     state = {
//         page: 1,
//     }

//     async apiSearch(searchValue) {
//         try {
//             const response = await axios(`api/`, {
//                 params: {
//                     key: API_KEY,
//                     q: searchValue,
//                     image_type: "photo",
//                     orientation: "horizontal",
//                     safesearch: true,
//                     page: this.state.page,
//                     per_page: perPage,
//                 }
//             });

//             this.setState(prevState => {
//                 prevState.page += 1;
//             })

//             return response.data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export default class PictureApiServise {
//     constructor() {
//         this.searchRequest = "";
//         this.page = 1;
//     }

//     async  pictureSearch() {
//         try {              
//             const fetchRequest = await axios.get(`api/`, {
//                 params: {
//                     key: API_KEY,
//                     q: this.searchRequest,
//                     image_type: "photo",
//                     orientation: "horizontal",
//                     safesearch: true,
//                     page: this.page,
//                     per_page: perPage,
                    
//                 }
//             });
//             const response = await fetchRequest.data;
            
//             if (this.page * perPage >= response.totalHits && response.totalHits !== 0) {
//               Notiflix.Notify.warning(`We're sorry, but you've reached the end of search results.`);
//             }
//             if (response.totalHits === 0) {
//               Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
//             }
//             if (response.totalHits > perPage && this.searchRequest !== "" && this.page === 1) {
//                Notiflix.Notify.success(`Hooray! We found ${response.totalHits} images.`);
//             }
//             this.page += 1;
            
//             return response;              
                
//         } catch (error) {
//             Notiflix.Notify.warning(`Sorry, something went wrong`);
//         }      
// }

// resetPage() {
//     this.page = 1;
// }

//     get query() {
//         return this.searchRequest;
//     }

//     set query(newQuery) {
//         this.searchRequest = newQuery;
//     }
// }