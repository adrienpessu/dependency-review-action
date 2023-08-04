import {Change} from './schemas'

export async function getDeniedChanges(
  changes: Change[],
  deniedList: string[]
): Promise<Change[]> {
  const changesDenied: Change[] = []

  for (const change of changes) {
    change.name = change.name.toLowerCase()
    change.package_url = change.package_url.toLowerCase()

    for (const denied of deniedList) {
      if (change.name.includes(denied)) {
        changesDenied.push(change)
      }
    }
  }

  return changesDenied
}
