import React from 'react';
import SubFolder from './components/SubFolder';

const App = () => {
  return (
    <div className="main">
      <ul className="main-category list-unstyled">
        <li className="main-folder">
          <a
            className="btn btn-togglem rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#primaryFolder-collapse"
            aria-expanded="false">
            <img src="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png" height="24" width="24" />
            Primary Folder
          </a>
        </li>
        <div className="collapse" id="primaryFolder-collapse">
          <SubFolder
            id="primaryFolderName"
            title="FolderName"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
          <SubFolder
            id="primarySupportingFiles"
            title="SupportingFiles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="primaryDetachingInstances"
            title="DetachingInstances"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="primaryGlobalStyles"
            title="GlobalStyles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="primaryAdvancedElevation"
            title="AdvancedElevation"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
        </div>
        <li className="main-folder">
          <span
            className="btn btn-togglem rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#products-collapse"
            aria-expanded="false"
          >
            <img src="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png" height="24" width="24" />
            Products
          </span>
        </li>
        <div className="collapse" id="products-collapse">
          <SubFolder
            id="productsFolderName"
            title="FolderName"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
          <SubFolder
            id="productsSupportingFiles"
            title="SupportingFiles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="productsDetachingInstances"
            title="DetachingInstances"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="productsGlobalStyles"
            title="GlobalStyles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="productsAdvancedElevation"
            title="AdvancedElevation"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
        </div>
        <li className="main-folder">
          <span
            className="btn btn-togglem rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#library-collapse"
            aria-expanded="false">
            <img src="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png" height="24" width="24" />
            Libraries
          </span>
        </li>
        <div className="collapse" id="library-collapse">
          <SubFolder
            id="librariesFolderName"
            title="FolderName"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
          <SubFolder
            id="librariesSupportingFiles"
            title="SupportingFiles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="librariesDetachingInstances"
            title="DetachingInstances"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="librariesGlobalStyles"
            title="GlobalStyles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="librariesAdvancedElevation"
            title="AdvancedElevation"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
        </div>
        <li className="main-folder">
          <span
            className="btn btn-togglem rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#components-collapse"
            aria-expanded="false"
          >
            <img src="https://i.postimg.cc/ZY3P3910/folder.png" height="24" width="24" />
            Components
          </span>
        </li>
        <div className="collapse" id="components-collapse">
          <SubFolder
            id="componentsFolderName"
            title="FolderName"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
          <SubFolder
            id="componentsSupportingFiles"
            title="SupportingFiles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="componentsDetachingInstances"
            title="DetachingInstances"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="componentsGlobalStyles"
            title="GlobalStyles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="componentsAdvancedElevation"
            title="AdvancedElevation"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
        </div>
        <li className="main-folder">
          <span
            className="btn btn-togglem rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#templates-collapse"
            aria-expanded="false">
            <img src="https://i.postimg.cc/ZY3P3910/folder.png" height="24" width="24" />
            Templates
          </span>
        </li>
        <div className="collapse" id="templates-collapse">
          <SubFolder
            id="templatesFolderName"
            title="FolderName"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
          <SubFolder
            id="templatesSupportingFiles"
            title="SupportingFiles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="templatesDetachingInstances"
            title="DetachingInstances"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="templatesGlobalStyles"
            title="GlobalStyles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="templatesAdvancedElevation"
            title="AdvancedElevation"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
        </div>
        <li className="main-folder">
          <span
            className="btn btn-togglem rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#private-collapse"
            aria-expanded="false"
          >
            <img src="https://i.postimg.cc/XJtsd8TX/lock.png" height="24" width="24" />
            Private
          </span>
        </li>
        <div className="collapse" id="private-collapse">
          <SubFolder
            id="privateFolderName"
            title="FolderName"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
          <SubFolder
            id="privateSupportingFiles"
            title="SupportingFiles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="privateDetachingInstances"
            title="DetachingInstances"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="privateGlobalStyles"
            title="GlobalStyles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="privateAdvancedElevation"
            title="AdvancedElevation"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
        </div>
        <li className="main-folder">
          <span
            className="btn btn-togglem rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#storage-collapse"
            aria-expanded="false"
          >
            <img src="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png" height="24" width="24" />
            Storage
          </span>
        </li>
        <div className="collapse" id="storage-collapse">
          <SubFolder
            id="storageFolderName"
            title="FolderName"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
          <SubFolder
            id="storageSupportingFiles"
            title="SupportingFiles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="storageDetachingInstances"
            title="DetachingInstances"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="storageGlobalStyles"
            title="GlobalStyles"
            img="https://i.postimg.cc/ZY3P3910/folder.png"
          />
          <SubFolder
            id="storageAdvancedElevation"
            title="AdvancedElevation"
            img="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png"
          />
        </div>
      </ul>
    </div>
  );
}

export default App;
