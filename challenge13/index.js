// score: 300
// function getFilesToBackup(lastBackup, changes) {
//     let backups = [];
//     changes.filter((change) => change[1] > lastBackup)
//         .forEach((change) => backups.push(change[0]));
//     return [...new Set(backups)].sort((a, b) => a - b);
// }

// score: 300
// function getFilesToBackup(lastBackup, changes) {
//     return [
//         ...new Set(
//             changes
//                 .filter((backUp) => backUp[1] > lastBackup)
//                 .map((backUp) => backUp[0])
//         ),
//     ].sort((a, b) => a - b);
// }

// score: 300
// function getFilesToBackup(lastBackup, changes) {
//     const fileIds = changes
//         .filter(change => change[1] > lastBackup)
//         .map(change => change[0]);
//     const filesToBackup = new Set(fileIds);
//     return [...filesToBackup].sort((fileA, fileB) => fileA - fileB);
// }

// score: 300
function getFilesToBackup(lastBackup, changes) {
    let filterChanges = changes.filter((change) => (change[1] > lastBackup));
    let mapChanges = filterChanges.map((change) => change[0]);
    return [...new Set(mapChanges)].sort((a, b) => a - b);
}

// score: 220
// function getFilesToBackup(lastBackup, changes) {
//     const modified = [];
//     changes.forEach(([fileId, timestamp]) => {
//         if (timestamp > lastBackup) {
//             modified.push(fileId);
//         }
//     });
//     const unique = new Set(modified);
//     return [...unique].sort((a, b) => a - b);
// }

module.exports = getFilesToBackup;

const lastBackup = 1546300800;
const changes = [
    [1, 1546300800],
    [2, 1546300800],
    [1, 1546300900],
    [1, 1546301000],
    [3, 1546301100]
];
console.log(getFilesToBackup(lastBackup, changes));