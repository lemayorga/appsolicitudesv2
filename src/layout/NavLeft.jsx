import React  from "react";

const NavLeft = () =>{
    return(
<nav id="sidebar" className="sidebar">
    <div className="sidebar-content js-simplebar">
      <a className="sidebar-brand" href="index.html">
        <span className="align-middle">AdminKit</span>
      </a>

      <ul className="sidebar-nav">
        <li className="sidebar-header">
          Catálogos
        </li>
  
        <li className="sidebar-item active">
          <a className="sidebar-link"  routerLink="/areas-permisos">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Áreas</span>
          </a>
        </li>
  
        <li className="sidebar-item">
          <a className="sidebar-link" routerLink="/permisos">
            <i className="align-middle" data-feather="user"></i> <span className="align-middle">Permisos</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="pages-settings.html">
            <i className="align-middle" data-feather="settings"></i> <span className="align-middle">Settings</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="pages-invoice.html">
            <i className="align-middle" data-feather="credit-card"></i> <span className="align-middle">Invoice</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="pages-blank.html">
            <i className="align-middle" data-feather="book"></i> <span className="align-middle">Blank</span>
          </a>
        </li>

        <li className="sidebar-header">
          Tools & Components
        </li>
        <li className="sidebar-item">
          <a href="#ui" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="briefcase"></i> <span className="align-middle">UI Elements</span>
          </a>
          <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="ui-alerts.html">Alerts</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-buttons.html">Buttons</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-cards.html">Cards</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-general.html">General</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-grid.html">Grid</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-modals.html">Modals</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-typography.html">Typography</a></li>
          </ul>
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="icons-feather.html">
            <i className="align-middle" data-feather="coffee"></i> <span className="align-middle">Icons</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a href="#forms" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="check-circle"></i> <span className="align-middle">Forms</span>
          </a>
          <ul id="forms" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Form Layouts</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Basic Inputs</a></li>
          </ul>
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="tables-bootstrap.html">
            <i className="align-middle" data-feather="list"></i> <span className="align-middle">Tables</span>
          </a>
        </li>

        <li className="sidebar-header">
          Plugins & Addons
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">Charts</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="maps-google.html">
            <i className="align-middle" data-feather="map"></i> <span className="align-middle">Maps</span>
          </a>
        </li>
      </ul>

      <div className="sidebar-cta">
        <div className="sidebar-cta-content">
          <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
          <div className="mb-3 text-sm">
            Are you looking for more components?
          </div>
          <a href="https://adminkit.io/pricing" target="_blank" className="btn btn-outline-primary btn-block">Upgrade</a>
        </div>
      </div>
    </div>
  </nav>
    )
}

export default NavLeft;