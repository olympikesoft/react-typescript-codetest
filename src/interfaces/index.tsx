export interface User {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
  }
  
  export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
  }
  
  export interface Geo {
    lat: string
    lng: string
  }
  
  export interface Company {
    name: string
    catchPhrase: string
    bs: string
  }


export interface Post {
    id: number;
    title: string;
    body: string;
    userId: string;
    username: string;
    createdAt: Date;
    userImage: string;
};

export interface Reply {
    userImage: string;
    createdAt: Date;
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export interface Comment {
    userImage: string;
    createdAt: Date;
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
    replies?: Reply[];
    tags?: string[];
}

export interface CommentsState {
    comments: { [key: number]: Comment[] };
    loading: boolean;
    error: string | null;
  }

export interface Action {
    type: string;
    payload: any;
}

export interface SearchState {
    searchTerm: string;
}

export interface searchFilterState {
    users: User[];
    posts: Post[];
}