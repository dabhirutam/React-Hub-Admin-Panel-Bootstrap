import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import { useSelector } from 'react-redux';

function SidebarCom() {

  const setToggle = useSelector((state) => state.ToggleReducer);

  const sidebarEl = [
    { n: 'Dashboard', i: 'cpu' },
    { n: 'Analytics', i: 'bar-chart' },
    {
      n: 'Email', i: 'envelope', subItems: [
        { n: 'Inbox' },
        { n: 'Compose' },
        { n: 'Detail' },
      ]
    },
    { n: 'Widgets', i: 'columns-gap' },
    {
      n: 'POS System', i: 'bag-check', subItems: [
        { n: 'Customer Order' },
        { n: 'Kitchen Order' },
        { n: 'Counter Checkout' },
        { n: 'Table Booking' },
        { n: 'Menu Stock' },
      ]
    },
    {
      n: 'UI Kits', i: 'heart-fill', subItems: [
        { n: 'Bootstrap' },
        { n: 'Buttons' },
        { n: 'Cards' },
        { n: 'Icons' },
        { n: 'Modal & Notifications' },
        { n: 'Typography' },
        { n: 'Tabs & Accordions' },
      ]
    },
    {
      n: 'Forms', i: 'pen', subItems: [
        { n: 'Form Elements' },
        { n: 'Form Plugins' },
        { n: 'Wizards' },
      ]
    },
    {
      n: 'Tables', i: 'grid-3x3', subItems: [
        { n: 'Table Elements' },
        { n: 'Table Plugins' },
      ]
    },
    {
      n: 'Charts', i: 'pie-chart', subItems: [
        { n: 'Chart.js' },
        { n: 'Apexcharts.js' },
      ]
    },
    { n: 'Map', i: 'compass' },
    {
      n: 'Layout', i: 'layout-sidebar', subItems: [
        { n: 'Starter Page' },
        { n: 'Fixed Footer' },
        { n: 'Full Height' },
        { n: 'Full Width' },
        { n: 'Boxed Layout' },
        { n: 'Collapsed Sidebar' },
        { n: 'Top Nav' },
        { n: 'Mixed Nav' },
      ]
    },
    {
      n: 'Pages', i: 'collection', subItems: [
        { n: 'Scrum Board' },
        { n: 'Products' },
        { n: 'Orders' },
        { n: 'Login' },
        { n: 'Register' },
      ]
    },
    { n: 'Landing', i: 'diagram-3' },
    { n: 'Profile', i: 'people' },
    { n: 'Calendar', i: 'calendar4-event' },
    { n: 'Settings', i: 'gear' },
    { n: 'Helper', i: 'gem' },
  ];

  return (
    <>
      <Offcanvas className="bg-transparent" style={{ width: '300px', height: '100vh', marginTop: '62px' }} show={setToggle} backdrop="static" backdropClassName='bg-transparent'>
        <Offcanvas.Body>
          <Accordion defaultActiveKey={[0]} flush style={{ height: 'calc(100vh - 62px - 70px)' }} className='overflow-y-scroll'>
            {sidebarEl.map((item, index) => (
              <React.Fragment key={index}>
                {index === 0 && <h6 className="opacity-50">Navigation</h6>}
                {index === 3 && <h6 className="opacity-50">Components</h6>}
                {index === 13 && <h6 className="opacity-50">Users</h6>}
                <Accordion.Item key={index} eventKey={index}>
                  <Accordion.Header>
                    <i className={`bi bi-${item.i} me-3`}></i> {item.n}
                  </Accordion.Header>

                  {item.subItems && (
                    <Accordion.Body className='pt-0'>
                      <Accordion className='ps-3'>
                        {item.subItems.map((subItem, subIndex) => (
                          <Accordion.Item key={subIndex} eventKey={index + '.' + subIndex}>
                            <Accordion.Header>{subItem.n}</Accordion.Header>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </Accordion.Body>
                  )}
                </Accordion.Item>
              </React.Fragment>
            ))}
          </Accordion>

          <Button variant="outline-success" className='col-12'>
            <i className="bi bi-share me-2 opacity-75"></i> Documentation
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SidebarCom;