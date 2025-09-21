import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

// Set the date range
const startDate = moment("2025-06-01");
const endDate = moment(); // today

// Get a random date between start and end
const getRandomDate = () => {
  const diff = endDate.diff(startDate, "days");
  const randomOffset = random.int(0, diff);
  return moment(startDate).add(randomOffset, "days");
};

// Make one commit
const markCommit = (date, callback) => {
  const formattedDate = date.format();

  const data = {
    date: formattedDate,
  };

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(formattedDate, { "--date": formattedDate }, callback);
  });
};

// Make N commits
const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();

  const date = getRandomDate();
  console.log("Committing on:", date.format("YYYY-MM-DD"));

  markCommit(date, () => makeCommits(n - 1));
};

// Number of commits to make
makeCommits(50); // change this number if needed
