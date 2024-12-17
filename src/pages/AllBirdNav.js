import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function AllBirdNav() {
  return (
    <div class="pos-f-t">
    <div>
    <nav class="navbar">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <div className='p-5' >
  <a href="#" id='navbarToggleExternalContent' class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" id='navbarToggleExternalContent'  class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" id='navbarToggleExternalContent' class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" id='navbarToggleExternalContent' class="list-group-item list-group-item-action ">Vestibulum at eros</a>
</div>
</div>

  </div>
  );
}

export default AllBirdNav;