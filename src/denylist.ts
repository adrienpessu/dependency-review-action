import {Change} from './schemas'
export async function getDeniedChanges(
  changes: Change[],
  deniedList: string[]
): Promise<Change[]> {
  const changesDenied: Change[] = []

  for (const change of changes) {
    change.name = change.name.toLowerCase()
    change.package_url = change.package_url.toLowerCase()

    console.log(change.name)
    console.log(change.package_url)

    const founded =
      deniedList.filter(
        denied =>
          change.name.includes(denied) || change.package_url.includes(denied)
      ).length > 0
    if (founded) {
      changesDenied.push(change)
    }
  }

  return changesDenied
}
