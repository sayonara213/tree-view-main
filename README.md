
# File System Tree View App
Application to show knowledge about data structures and algorithms. This app works as a File Tree view and it allowes you to watch folder's insides and move files (depending on your role)

## Data Structure

    FileItem = {
    	id:  string;
    	type:  'folder' | 'file';
    	name:  string;
    	updatedAt:  Date;
    	children:  Array<FileItem>;
    	access:  'admin'  | 'user';
    }
Example JSON:

	{
		"id": "1",
		"type": "folder",
		"name": "Root",
		"updatedAt": "2022-04-23T18:25:43.511Z"
		"access": "user",
		"children": [
			{
				"id": "2",
				"type": "file",
				"name": "Some File",
				"updatedAt": "2022-02-22T13:24:55.511Z"
				"access": "user"
			}
		]
	}

In the app, I mocked up an object to be the permanent file.

## Functionality

First of all, you will see all the files and folders that are in the Root folder.
You can:

 - Expand and collapse not empty files
 - Move files and folders into Root, or another folder
 - See the full path of the clicked file
 - Search the needed file by it's name
 - Collapse entire file system if it gets messy
 - Switch roles to see the access functionality

## Design

The design was created during the development, and no Figma was used.
![image](https://github.com/sayonara213/tree-view-main/assets/79828791/d2c9de1a-9dc4-4732-b7fb-22fa6d4d600e)

## Run Application

You can test the [app deployed on Netlify](https://silver-eclair-961390.netlify.app/)
Or, run it locally:

 1. Clone the repo by using `git clone repo-link`
 2. Run `npm install` to install all deps
 3. Run `npm start` to run the app

The app will run on `localhost:3000`

## Drawbags or what-to-add

 - **Change the logic of complex algorithms for locating or moving files.**
   
	Maybe each file should have an id of its parent folder. It would be easier to store full parent folder reference in every file, but then it will be non-serializable, which is a bad approach if working with API.
	
 - **Use self-written Drag-and-Drop component.**
   
	 As ReactDND library is a good start, it also makes a mess with deep hierarchy objects and arrays, overlaying drop zones is not what this library is created for. Additionally, for now, we can't put a file directly into not-expanded folders, instead, we should put them into the expanded section, where all the files in the folder are.
![image](https://github.com/sayonara213/tree-view-main/assets/79828791/958e0fa4-6f2f-4f63-b487-c873e1bfdde0)

	 
 - **Switch to RTK Query and add delete functionality.**
   
	 As that project is intended to work with API, RTK Query is an excellent library to handle state and fetches, with it added, we could handle not only client state updates but also send them via API with ease.
	 
 - **Access control for writing | reading | editing.**
   
	For now, my app only restricts private files from moving to another folder (or if it's a folder, you can't put any file in it). But with these changes, it would be more concise to separate different restriction methods by setting each one of them a role.
	 
## Dependencies used
 - **React**, as a base Library
 - **Sass**, for styling
 - **Typescript**, for strict typization
 - **ReactDND**, for drag-and-drop functionality

