
import React, { FC } from 'react';
import { Layout, PageBlock, Table, PageHeader, Progress } from 'vtex.styleguide';
import { useQuery } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import ALL_CLIENTES from './graphql/gAllLeads.gql'


const AdminExample: FC = () => {

  const { loading, data } = useQuery(ALL_CLIENTES);

  // console.log(data);
  const defaultSchema = {
    properties: {
      nome: {
        title: 'Nome',
      },
      email: {
        title: 'Email',
      },
      telefone: {
        title: 'Telefone',
      },
      tipo: {
        title: 'Tipo',
      },
      created_at: {
        title: 'Created At',
      },
      updated_at: {
        title: 'Updated At',
      }
    },
  }

  return <>
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="leadpage.title" />}
        />
      }
    >
      <PageBlock variation="full">
        <div className="container">
          {loading ? (<Progress type="steps" steps={['inProgress']} />) :
            (

              < Table
                fullWidth
                schema={defaultSchema}
                items={data.leads}
                density="high"
              />
            )}
        </div>
      </PageBlock>
    </Layout >
  </>
}

export default AdminExample
