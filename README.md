# generator-ducks

files generator with yeoman js <br />

add yeoman dependence to you project:

### `yarn add yeoman-generator` 

add to you project file `.yo-rc.json`<br />
add to `.yo-rc.json` generator name (name must start with "generator-"): `
{
    "name": "generator-ducks"  
}`<br />

add folder with templates "generators" to project folder, <br />
by default, generator use folder "app" for get templates. If you added not only "app" folder, you can use comand: yo ducks:[folder_name] <br />

run: <br />

### `yarn link`

for create files: <br />

### `yo ducks` or `yo ducks:[folder_name]
