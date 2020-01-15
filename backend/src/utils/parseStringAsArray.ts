export default function parseStringAsArray(arrayAsString: string) {
  return arrayAsString.split(',').map(techs => techs.trim())
}
