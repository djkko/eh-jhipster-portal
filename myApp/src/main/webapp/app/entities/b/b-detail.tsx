import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './b.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const BDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const bEntity = useAppSelector(state => state.b.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bDetailsHeading">
          <Translate contentKey="myApp.b.detail.title">B</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{bEntity.id}</dd>
          <dt>
            <span id="appName">
              <Translate contentKey="myApp.b.appName">App Name</Translate>
            </span>
          </dt>
          <dd>{bEntity.appName}</dd>
          <dt>
            <span id="appIcon">
              <Translate contentKey="myApp.b.appIcon">App Icon</Translate>
            </span>
          </dt>
          <dd>
            {bEntity.appIcon ? (
              <div>
                {bEntity.appIconContentType ? (
                  <a onClick={openFile(bEntity.appIconContentType, bEntity.appIcon)}>
                    <img src={`data:${bEntity.appIconContentType};base64,${bEntity.appIcon}`} style={{ maxHeight: '30px' }} />
                  </a>
                ) : null}
                <span>
                  {bEntity.appIconContentType}, {byteSize(bEntity.appIcon)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="myApp.b.a">A</Translate>
          </dt>
          <dd>{bEntity.a ? bEntity.a.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/b" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/b/${bEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BDetail;