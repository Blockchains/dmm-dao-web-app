import { ProposalSummary } from './ProposalSummary'
import { AccountSummary } from './AccountSummary'
import { ProposalHistoryBreadcrumb } from './ProposalHistoryBreadcrumb'
import { ethers } from 'ethers'

export class ProposalDetails extends ProposalSummary {

  constructor(props) {
    super(props);
    this.breadcrumbs = props.breadcrumbs.map(breadcrumb => new ProposalHistoryBreadcrumb(breadcrumb))
    this.proposerAccount = new AccountSummary(props.proposer_account)
    this.votesForBN = ethers.BigNumber.from(props.votes_for_padded)
    this.votesAgainstBN = ethers.BigNumber.from(props.votes_against_padded)
    this.votersFor = props.voters_for.map(voter => new AccountSummary(voter))
    this.votersAgainst = props.voters_against.map(voter => new AccountSummary(voter))
  }

}