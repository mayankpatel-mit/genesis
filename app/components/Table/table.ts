export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
  subRows?: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: string;
  }[];
};

export const tableData: User[] = [
  {
    id: 1,
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
    subRows: [
      {
        id: 101,
        firstName: "string",
        lastName: "Linsley",
        age: 33,
        visits: 100,
        progress: 50,
        status: "Married",
      },
      {
        id: 102,
        firstName: "string",
        lastName: "Linsley",
        age: 33,
        visits: 100,
        progress: 50,
        status: "Married",
      },
      {
        id: 103,
        firstName: "string",
        lastName: "Linsley",
        age: 33,
        visits: 100,
        progress: 50,
        status: "Married",
      },
      {
        id: 104,
        firstName: "string",
        lastName: "Linsley",
        age: 33,
        visits: 100,
        progress: 50,
        status: "Single",
      },
      {
        id: 105,
        firstName: "string",
        lastName: "Linsley",
        age: 33,
        visits: 100,
        progress: 50,
        status: "Single",
      },
    ],
  },
  {
    id: 2,
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
    subRows: [
      {
        id: 106,
        firstName: "idk",
        lastName: "who",
        age: 33,
        visits: 100,
        progress: 50,
        status: "whats thar",
      },
    ],
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Johnson",
    age: 45,
    visits: 150,
    progress: 75,
    status: "Divorced",
  },
  {
    id: 4,
    firstName: "Jessica",
    lastName: "Smith",
    age: 29,
    visits: 120,
    progress: 90,
    status: "Single",
  },
  {
    id: 5,
    firstName: "Michael",
    lastName: "Brown",
    age: 38,
    visits: 180,
    progress: 60,
    status: "Married",
  },
  {
    id: 6,
    firstName: "Sarah",
    lastName: "Miller",
    age: 35,
    visits: 220,
    progress: 80,
    status: "Married",
  },
  {
    id: 7,
    firstName: "David",
    lastName: "Davis",
    age: 41,
    visits: 90,
    progress: 30,
    status: "Single",
  },
  {
    id: 8,
    firstName: "Rachel",
    lastName: "Wilson",
    age: 31,
    visits: 110,
    progress: 95,
    status: "Married",
  },
  {
    id: 9,
    firstName: "Andrew",
    lastName: "Anderson",
    age: 50,
    visits: 130,
    progress: 70,
    status: "Divorced",
  },
  {
    id: 10,
    firstName: "Lauren",
    lastName: "Taylor",
    age: 26,
    visits: 140,
    progress: 85,
    status: "Single",
  },
  {
    id: 11,
    firstName: "James",
    lastName: "Martinez",
    age: 32,
    visits: 160,
    progress: 40,
    status: "Married",
  },
  {
    id: 12,
    firstName: "Amanda",
    lastName: "Harris",
    age: 39,
    visits: 170,
    progress: 55,
    status: "Married",
  },
  {
    id: 13,
    firstName: "Christopher",
    lastName: "Garcia",
    age: 28,
    visits: 190,
    progress: 65,
    status: "Single",
  },
  {
    id: 14,
    firstName: "Stephanie",
    lastName: "Clark",
    age: 36,
    visits: 210,
    progress: 45,
    status: "Divorced",
  },
  {
    id: 15,
    firstName: "Matthew",
    lastName: "Lewis",
    age: 43,
    visits: 200,
    progress: 70,
    status: "Married",
  },
  {
    id: 16,
    firstName: "Jennifer",
    lastName: "Lee",
    age: 34,
    visits: 180,
    progress: 80,
    status: "Divorced",
  },
  {
    id: 17,
    firstName: "Justin",
    lastName: "Wright",
    age: 30,
    visits: 150,
    progress: 90,
    status: "Single",
  },
  {
    id: 18,
    firstName: "Megan",
    lastName: "King",
    age: 29,
    visits: 170,
    progress: 55,
    status: "Single",
  },
  {
    id: 19,
    firstName: "Nicholas",
    lastName: "Evans",
    age: 37,
    visits: 160,
    progress: 75,
    status: "Married",
  },
  {
    id: 20,
    firstName: "Samantha",
    lastName: "Parker",
    age: 33,
    visits: 140,
    progress: 85,
    status: "Divorced",
  },
  {
    id: 21,
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    id: 22,
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    id: 23,
    firstName: "Emily",
    lastName: "Johnson",
    age: 45,
    visits: 150,
    progress: 75,
    status: "Divorced",
  },
  {
    id: 24,
    firstName: "Jessica",
    lastName: "Smith",
    age: 29,
    visits: 120,
    progress: 90,
    status: "Single",
  },
  {
    id: 25,
    firstName: "Michael",
    lastName: "Brown",
    age: 38,
    visits: 180,
    progress: 60,
    status: "Married",
  },
  {
    id: 26,
    firstName: "Sarah",
    lastName: "Miller",
    age: 35,
    visits: 220,
    progress: 80,
    status: "Married",
  },
  {
    id: 27,
    firstName: "David",
    lastName: "Davis",
    age: 41,
    visits: 90,
    progress: 30,
    status: "Single",
  },
  {
    id: 28,
    firstName: "Rachel",
    lastName: "Wilson",
    age: 31,
    visits: 110,
    progress: 95,
    status: "Married",
  },
  {
    id: 29,
    firstName: "Andrew",
    lastName: "Anderson",
    age: 50,
    visits: 130,
    progress: 70,
    status: "Divorced",
  },
  {
    id: 30,
    firstName: "Lauren",
    lastName: "Taylor",
    age: 26,
    visits: 140,
    progress: 85,
    status: "Single",
  },
  {
    id: 31,
    firstName: "James",
    lastName: "Martinez",
    age: 32,
    visits: 160,
    progress: 40,
    status: "Married",
  },
  {
    id: 32,
    firstName: "Amanda",
    lastName: "Harris",
    age: 39,
    visits: 170,
    progress: 55,
    status: "Married",
  },
  {
    id: 33,
    firstName: "Christopher",
    lastName: "Garcia",
    age: 28,
    visits: 190,
    progress: 65,
    status: "Single",
  },
  {
    id: 34,
    firstName: "Stephanie",
    lastName: "Clark",
    age: 36,
    visits: 210,
    progress: 45,
    status: "Divorced",
  },
  {
    id: 35,
    firstName: "Matthew",
    lastName: "Lewis",
    age: 43,
    visits: 200,
    progress: 70,
    status: "Married",
  },
  {
    id: 36,
    firstName: "Jennifer",
    lastName: "Lee",
    age: 34,
    visits: 180,
    progress: 80,
    status: "Divorced",
  },
  {
    id: 37,
    firstName: "Justin",
    lastName: "Wright",
    age: 30,
    visits: 150,
    progress: 90,
    status: "Single",
  },
  {
    id: 38,
    firstName: "Megan",
    lastName: "King",
    age: 29,
    visits: 170,
    progress: 55,
    status: "Single",
  },
  {
    id: 39,
    firstName: "Nicholas",
    lastName: "Evans",
    age: 37,
    visits: 160,
    progress: 75,
    status: "Married",
  },
  {
    id: 40,
    firstName: "Samantha",
    lastName: "Parker",
    age: 33,
    visits: 140,
    progress: 85,
    status: "Divorced",
  },
];
