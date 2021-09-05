var ProcessChadValue = require(`../../command/getChadValue`)

const chadType = `
    type ChadType {
        getValue: String
        blah(wow: String!): String
    }

    type Query {
    bruh(omegaLul: String!): ChadType
    }
`
const chadResolver = {
    bruh: ({omegaLul}) => {
        return new ProcessChadValue(omegaLul)
      }
}

module.exports = { chadType: chadType, chadResolver:  chadResolver}

