var ProcessChadValue = require(`../../command/getChadValue`)

const setChadType = `
    type Mutation {
    setChad(omegaLul: String!): ChadType
    }
`
const setChadResolver = {
    bruh: ({omegaLul}) => {
        return new ProcessChadValue(omegaLul)
      }
}

module.exports = { setChadType: setChadType, setChadResolver:  setChadResolver}