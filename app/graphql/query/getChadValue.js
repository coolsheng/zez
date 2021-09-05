var ProcessChadValue = require(`../../command/getChadValue`)

const getChadType = `
    type Query {
    bruh(omegaLul: String!): ChadType
    }
`

const chadResolver = {
    bruh: ({omegaLul}) => {
        return new ProcessChadValue(omegaLul)
      }
}

module.exports = { getChadType: getChadType, chadResolver:  chadResolver}