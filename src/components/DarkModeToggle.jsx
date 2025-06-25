import { Switch } from '@headlessui/react'

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <Switch
      checked={darkMode}
      onChange={setDarkMode}
      className={`${
        darkMode ? 'bg-teal-900' : 'bg-teal-700'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`${
          darkMode ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}
