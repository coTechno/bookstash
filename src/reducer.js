import {
  ADD_TO_CART_COUNT,
  ADD_TO_CART_LIST,
  ADD_TO_TOTAL_AMOUNT,
  DELETE_FROM_CART_COUNT,
  DELETE_FROM_CART_LIST,
  DELETE_FROM_TOTAL_AMOUNT,
} from "./action";

const initialState = {
  productList1: [
    {
      id: 0,
      name: "Atomic Habits",
      description: `James Clear`,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 12.7,
      rating: 4.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/07/978-1847941831.jpg",
    },
    {
      id: 1,
      name: "The Spanish Love",
      description: "Elena Armas",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.49,
      rating: 4.2,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/07/979-8705893843.jpg",
    },
    {
      id: 2,
      name: "Michelle Obama",
      description: "Michelle Obama",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 10.64,
      rating: 3.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/09/becoming.jpg",
    },
    {
      id: 3,
      name: "Seven Husbands",
      description: "Taylor Jenkins Reid",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.89,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/05/1501161938.png",
    },
    {
      id: 4,
      name: "Shoe Dog Phil",
      description: "Nike",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 13.37,
      rating: 4.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/shoe.jpg",
    },
    {
      id: 5,
      name: "Subconscious Mind",
      description: "Dr. Joseph Merphy",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 11.99,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/canthurt-1.jpg",
    },
    {
      id: 6,
      name: "Atomic Habits",
      description: `James Clear`,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 12.7,
      rating: 4.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/07/978-1847941831.jpg",
    },
    {
      id: 7,
      name: "The Spanish Love",
      description: "Elena Armas",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.49,
      rating: 4.2,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/07/979-8705893843.jpg",
    },
    {
      id: 8,
      name: "Shoe Dog Phil",
      description: "Nike",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 13.37,
      rating: 4.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/shoe.jpg",
    },
    {
      id: 9,
      name: "Subconscious Mind",
      description: "Dr. Joseph Merphy",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 11.99,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/canthurt-1.jpg",
    }
  ],
  productList2: [
    {
      id: 0,
      name: "The Palace Of Illusions",
      description: `Chitra Banerjee`,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 12.7,
      rating: 4.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/palace.jpg",
    },
    {
      id: 1,
      name: "Monk Sold His Ferrari",
      description: "Robin Sharma",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.49,
      rating: 4.2,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2021/10/monk.png",
    },
    {
      id: 2,
      name: "Noise: A Flaw In Human",
      description: "Daniel Kahneman",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 10.64,
      rating: 3.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/08/noise.jpg",
    },
    {
      id: 3,
      name: "Kafka On The Shore",
      description: "Murakami",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.89,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/09/3190fsfp48L._SX321_BO1204203200_.jpg",
    },
    {
      id: 4,
      name: "Reminders Of Him",
      description: "Anonymous",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 13.37,
      rating: 4.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/09/REMINDER.jpg",
    },
    {
      id: 5,
      name: "It Ends With Us",
      description: "Anonymous",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 11.99,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/08/51qX2RGyhhL._SX320_BO1204203200_.jpg",
    },
    {
      id: 6,
      name: "Noise: A Flaw In Human",
      description: "Daniel Kahneman",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 10.64,
      rating: 3.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/08/noise.jpg",
    },
    {
      id: 7,
      name: "Kafka On The Shore",
      description: "Murakami",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.89,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/09/3190fsfp48L._SX321_BO1204203200_.jpg",
    },
    {
      id: 8,
      name: "Reminders Of Him",
      description: "Anonymous",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 13.37,
      rating: 4.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/09/REMINDER.jpg",
    },
    {
      id: 9,
      name: "It Ends With Us",
      description: "Anonymous",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 11.99,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/08/51qX2RGyhhL._SX320_BO1204203200_.jpg",
    },
  ],
  productList3: [
    {
      id: 0,
      name: "Things Fall Apart",
      description: `Novel by Chinua Achebe`,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 12.7,
      rating: 4.5,
      image:
        "https://m.media-amazon.com/images/I/51ZKMPEuD6L._SX324_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      name: "Mrs Dalloway",
      description: "Novel by Virginia Woolf",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.49,
      rating: 4.2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2K_iELLJ11de8QvbTnIvzYr9BhDPHzroE3FThKRGkOiz9p7cYi8J4D8Dj&s=5",
    },
    {
      id: 2,
      name: "Brave New World",
      description: "Novel by Aldous Huxley",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 10.64,
      rating: 3.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPVRyRjsP1ajH7Eo66-GjBLFXkwvE-zLTyd3nQeEfxhw-9aQ0XC_Rkn-1&s=5",
    },
    {
      id: 3,
      name: "Invisible Man",
      description: "Novel by Ralph Ellison",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.89,
      rating: 3.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMsEKzQFEbV8g0ora7jdPeQjxjgdAxJpDOZ_wh5uJT6_CSpGm1X41NaJU&s=5",
    },
    {
      id: 4,
      name: "A Passage to India",
      description: "Novel by E. M. Forster",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 13.37,
      rating: 4.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrVVuz0mW2cao5RU4UP4ZaUu0Ye5lYDl1E88QESeH6z93DfZsjo42Roh7&s=5",
    },
    {
      id: 5,
      name: "To the Lighthouse",
      description: "Novel by Virginia Woolf",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 11.99,
      rating: 3.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQ8YiW42iF6hQq-PCY-DCFvtMr9eEW6iw7pEL4xuf_26oJi2HfL7hfnCN&s=5",
    },
    {
      id: 6,
      name: "Brave New World",
      description: "Novel by Aldous Huxley",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 10.64,
      rating: 3.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPVRyRjsP1ajH7Eo66-GjBLFXkwvE-zLTyd3nQeEfxhw-9aQ0XC_Rkn-1&s=5",
    },
    {
      id: 7,
      name: "Invisible Man",
      description: "Novel by Ralph Ellison",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.89,
      rating: 3.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMsEKzQFEbV8g0ora7jdPeQjxjgdAxJpDOZ_wh5uJT6_CSpGm1X41NaJU&s=5",
    },
    {
      id: 8,
      name: "A Passage to India",
      description: "Novel by E. M. Forster",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 13.37,
      rating: 4.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrVVuz0mW2cao5RU4UP4ZaUu0Ye5lYDl1E88QESeH6z93DfZsjo42Roh7&s=5",
    },
    {
      id: 9,
      name: "To the Lighthouse",
      description: "Novel by Virginia Woolf",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 11.99,
      rating: 3.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQ8YiW42iF6hQq-PCY-DCFvtMr9eEW6iw7pEL4xuf_26oJi2HfL7hfnCN&s=5",
    },
  ],
  productList4: [
    {
      id: 0,
      name: "40 Years IIT-JEE Advanced+ JEE Main",
      description: ``,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 12.7,
      rating: 4.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/07/40-years-iit-jee-advanced-16-yrs-jee-main-topic-wise-solved-original-imaeuusggyrwtghg.jpg",
    },
    {
      id: 1,
      name: "Pathfinder NDA/NA National Defence",
      description: "",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.49,
      rating: 4.2,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/B09B7728X3.jpg",
    },
    {
      id: 2,
      name: "CDS Solved Paper Chapterwise",
      description: "",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 10.64,
      rating: 3.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/B09QSFVD4S.jpg",
    },
    {
      id: 3,
      name: "Kiren Text zbook Of SSC Elementary",
      description: "",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.89,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/9393260664.jpg",
    },
    {
      id: 4,
      name: "Science For Class 10 Part-1",
      description: "",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 13.37,
      rating: 4.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/08/physics.jpg",
    },
    {
      id: 5,
      name: "Science For Class 10 Part-2",
      description: "",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 11.99,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/08/chemistry.jpg",
    },{
      id: 6,
      name: "Science For Class 10 Part-1",
      description: "",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 13.37,
      rating: 4.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/08/physics.jpg",
    },
    {
      id: 7,
      name: "Pathfinder NDA/NA National",
      description: "",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.49,
      rating: 4.2,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/B09B7728X3.jpg",
    },
    {
      id: 8,
      name: "40 Years IIT-JEE Advanced+ JEE Main",
      description: ``,
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 12.7,
      rating: 4.5,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/07/40-years-iit-jee-advanced-16-yrs-jee-main-topic-wise-solved-original-imaeuusggyrwtghg.jpg",
    },
    {
      id: 9,
      name: "Kiren Text zbook Of SSC Elementary",
      description: "",
      about:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis possimus eligendi vitae necessitatibus consequatur nesciunt, sit reiciendis mollitia ad fugit amet in quo reprehenderit, obcaecati culpa. Officiis dolorum corrupti est quis, repellat, officia quidem ratione autem nam, iusto quasi cum alias laborum reprehenderit blanditiis. Est, quia. Vel, voluptatem magnam.",
      price: 9.89,
      rating: 3.9,
      image:
        "https://www.whatsinyourstory.com/wp-content/uploads/2022/06/9393260664.jpg",
    },
  ],
  cartCount: 0,
  cartList: [],
  totalAmout: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    case ADD_TO_CART_LIST:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    case ADD_TO_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmout: state.totalAmout + action.payload,
      };
    case DELETE_FROM_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount - 1,
      };
    case DELETE_FROM_CART_LIST:
      return {
        ...state,
        ...state.cartList.splice(state.cartList.indexOf(action.payload) + 1, 1),
        cartList: [...state.cartList],
        // cartList: [state.cartList.splice(Object.values(action.payload.id), 1)],
      };
    case DELETE_FROM_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmout: state.totalAmout - action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
